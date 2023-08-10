import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { NotFoundPagesComponent } from './components/pages/not-found-pages/not-found-pages.component';
import { authGuard } from './guards/auth.guard';
import { RandomUserPageComponent } from './components/pages/random-user-page/random-user-page.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'login', component:LoginPageComponent},
  {path:'home', component:HomePageComponent,canActivate: [authGuard]},//para que no nos deje ir al home si no nos logueamos ,canActivate: [authGuard]
  {path:'randomcontact', component:RandomUserPageComponent,canActivate: [authGuard]},
  {path:'**',component:NotFoundPagesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
