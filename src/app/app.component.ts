import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProyectoAngular';

  constructor(private router:Router){}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
  }
  token:string | null ='';

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
