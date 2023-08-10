import { Component, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/interfaces/randomuser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-user-page',
  templateUrl: './random-user-page.component.html',
  styleUrls: ['./random-user-page.component.css']
})
export class RandomUserPageComponent implements OnInit{

  contact:IRandomContact | undefined; //con este input ahora lo tendriamos que hacer desde la pagina

  showRandomC:boolean=false;

  constructor(private randomuserService:RandomUserService){}

  ngOnInit(): void {

    this.randomuserService.obtenerRandomContact().subscribe((response:Results)=>{

      this.contact = response.results[0];//Se lo pasariamos al RandomContact

      console.table(this.contact.name);

      setTimeout(() => {
        this.showRandomC = true;
      }, 1000); // Show after 1 second

    });
      
  }

  obtenerNuevoContacto(){

    this.randomuserService.obtenerRandomContact().subscribe({
      next:(response:Results)=>{

        this.contact = response.results[0];//Se lo pasariamos al RandomContact

      },
      error:(error:Error)=>{
        console.error(`Error ${error}`)
      },
      complete:()=>{console.info("Peticion completada")}
    
    });

  }

  obtenerListaContactos(num:number){

    this.randomuserService.obtenerRandomContacts(num).subscribe({
      next:(response:Results[])=>{

        console.log(response);

      },
      error:(error:Error)=>{
        console.error(`Error ${error}`)
      },
      complete:()=>{console.info("Peticion completada")}
    
    });

  }

  obtenerContactosGenero(sexo:string){

    this.randomuserService.obtenerContactGenero(sexo).subscribe({
      next:(response:Results[])=>{

        console.log(response);

      },
      error:(error:Error)=>{
        console.error(`Error ${error}`)
      },
      complete:()=>{console.info("Peticion completada")}
    
    });

  }

}
