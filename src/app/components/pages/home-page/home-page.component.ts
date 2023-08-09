import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

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
