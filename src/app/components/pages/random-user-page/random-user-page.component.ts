import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IRandomContact, Results } from 'src/app/models/interfaces/randomuser';
import { RandomUserService } from 'src/app/services/random-user.service';
import { RandomUserComponent } from '../../random-user/random-user.component';

@Component({
  selector: 'app-random-user-page',
  templateUrl: './random-user-page.component.html',
  styleUrls: ['./random-user-page.component.css']
})
export class RandomUserPageComponent implements OnInit{

  contact:IRandomContact | undefined; //con este input ahora lo tendriamos que hacer desde la pagina

  showRandomC:boolean=false;


  constructor(private randomuserService:RandomUserService, private router:Router){}

  ngOnInit(): void {
    
    this.randomuserService.obtenerRandomContact().subscribe((response:Results)=>{

      this.contact = response.results[0];//Se lo pasariamos al RandomContact

      console.table(this.contact.name);

      setTimeout(() => {
        this.showRandomC = true;
      }, 1000); // Show after 1 second

    });
      
  }

  

  /*obtenerNuevoContacto(){

    this.randomuserService.obtenerRandomContact().subscribe({
      next:(response:Results)=>{

        this.contact = response.results[0];//Se lo pasariamos al RandomContact

      },
      error:(error:Error)=>{
        console.error(`Error ${error}`)
      },
      complete:()=>{console.info("Peticion completada")}
    
    });

  }*/

  obtenerListaContactos(num:number,sexo?:string){

    this.randomuserService.obtenerRandomContacts(num,sexo).subscribe({
      next:(response:Results[])=>{

        console.log(response);

      },
      error:(error:Error)=>{
        console.error(`Error ${error}`)
      },
      complete:()=>{console.info("Peticion completada")}
    
    });

  }

  volverHome(){
    this.router.navigate([''])
  }


}
