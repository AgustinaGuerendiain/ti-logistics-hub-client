import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

  constructor(private router: Router) { }

    canActivate() {
        
        if (!localStorage.getItem('UsuarioId')) {
            console.log('No estás logueado');
            this.router.navigateByUrl('/home');
            return false;
        }

        return true;
    }
  
}
