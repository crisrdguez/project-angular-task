import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router:Router, private authservice:AuthService){}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
  }
  token:string | null ='';

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  estaLogueado(){
    return this.authservice.estaLogueadoService();
    
  }

  

}
