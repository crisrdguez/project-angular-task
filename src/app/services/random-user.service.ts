import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { retry } from 'rxjs/operators';
import { IRandomContact, Results } from '../models/interfaces/randomuser';


@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http:HttpClient) { }

  handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error(`Ha habido un error: ${error}`);
    }else{
      console.error(`Error en el backend: ${error.status}. Respuesta:${error.error}`);
    }

    return throwError(()=>new Error('Error en la petición de contacto aleatorio'));
  }

  //Obtener un contacto aleatorio, devuelve un Observable
  obtenerRandomContact(): Observable<Results>{

    let url:string="https://randomuser.me/api"

    return this.http.get<Results>(url).pipe( //.pipe es mas avanzado en Observable, gestionamos errores
      retry(2),//Numero de intentos antes de que salte el error
      catchError(this.handleError)//Sacamos error si algo falla
    );

  }

  obtenerRandomContacts(num:number):Observable<Results[]>{ //para usar diferentes opciones he importado HttpParams

    let opciones:HttpParams = new HttpParams().set("results",num); //Le seteamos algunas propiedades, como limitar el numero de results

    let url:string="https://randomuser.me/api"

    return this.http.get<Results[]>(url, {params:opciones}).pipe( //.pipe es mas avanzado en Observable, gestionamos errores
      retry(2),//Numero de intentos antes de que salte el error
      catchError(this.handleError)//Sacamos error si algo falla
    );

  }

  obtenerContactGenero(sexo:string):Observable<any>{

    let opciones:HttpParams = new HttpParams().set("gender",sexo); //Le seteamos algunas propiedades, como limitar el numero de results

    let url:string="https://randomuser.me/api"

    return this.http.get(url, {params:opciones}).pipe( //.pipe es mas avanzado en Observable, gestionamos errores
      retry(2),//Numero de intentos antes de que salte el error
      catchError(this.handleError)//Sacamos error si algo falla
    );

  }
}
