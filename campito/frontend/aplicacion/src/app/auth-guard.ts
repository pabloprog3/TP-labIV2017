import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from "@angular/router";
import { Auth } from "./servicios/auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private auth: Auth, private router: Router){


    }
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(localStorage.getItem('token')){
            console.log('AUTH GUARD PASSED');
            return true;
        }
        else{
            console.log('BLOCKED BY AUTH GUARD');
            this.router.navigate(['/login']);
            return false;
        }
    }

}