import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService:HttpClient) { }

  //Metodo login que devuelve un Observable
  login(email:string, password:string) : Observable<any>{

    let body = {
      email:email,
      password:password
    }
    //Devuelve la respuesta del Observable cuando la peticion http se ha completado
    //El componente suscrito accedera al token del login
      return this.httpService.post('https://reqres.in/api/login',body);

  }
}
