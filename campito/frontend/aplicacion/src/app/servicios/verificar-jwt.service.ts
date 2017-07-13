import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router }  from '@angular/router';
import { AutService } from '../servicios/aut.service';

@Injectable()
export class VerificarJWTService implements CanActivate {

  constructor( private router: Router, private auth: AutService ) {
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {

        let url: string = state.url;

        if ( this.auth.isLogued() )
        {

          return true;
        }
        else
        {
          this.router.navigate(['/login']);
          return !true;
        }
  }
}