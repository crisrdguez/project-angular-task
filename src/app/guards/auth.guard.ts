import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {

  //si devolvemos true: cargamos la ruta
  //Si devolvemos false: no cargamos la ruta

  const router = inject(Router);

  //Para hacer una comprobación haremos que si se carga el login, guardaremos en localstorage un valor de token

  let token = sessionStorage.getItem('token');

  if(token){
    return true;
  }else{
    router.navigate(['login']);
    return false; //si pusieramos el valor a false no podriamos navegar por contactos - ver app-routing.module.ts, al añadir canActivate: [authGuard]
  }

  
};
