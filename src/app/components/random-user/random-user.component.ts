import { Component, Input, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/interfaces/randomuser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit{

  @Input() randomContact:IRandomContact | undefined; //con este input ahora lo tendriamos que hacer desde la pagina
  @Input() showRandomContact:boolean=false;


  constructor(private randomuserService:RandomUserService){}

  ngOnInit(): void {

    
      
  }

  obtenerNuevoContacto(){

    this.randomuserService.obtenerRandomContact().subscribe({
      next:(response:Results)=>{

        this.randomContact = response.results[0];//Se lo pasariamos al RandomContact

      },
      error:(error:Error)=>{
        console.error(`Error ${error}`)
      },
      complete:()=>{console.info("Peticion completada")}
    
    });

  }

  guardarContacto(){
    //guarda contacto, mensaje de contacto guardado y se ve en una lista con muchos muas datos(sacamos del api y guardamos en bbdd), por ultimo se genera usuario nuevo
    //uso de firebase.// schematics
  }

}
