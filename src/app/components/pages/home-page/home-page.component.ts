import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  //Se puede eliminar
  /*
  constructor(private router:Router){}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
  }
  token:string | null ='';

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }*/

  /*
  today = new Date();
  month = this.today.getMonth();
  year = this.today.getFullYear();*/
  
  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
      
  }

  //ejemplo de seleccion de fecha
  /*
  campaignOne = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 13)),
    end: new FormControl(new Date(this.year, this.month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 15)),
    end: new FormControl(new Date(this.year, this.month, 19)),
  });*/


}
