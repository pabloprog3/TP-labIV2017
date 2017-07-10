import { Component, OnInit } from '@angular/core';
//import {AuthenticationService} from '../../servicios/athentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth } from "../../servicios/auth.service";
import { Usuario } from '../../clases/Usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    title = 'Inmobiliarias El Campito S.A.';
    email: string="";
    passw: string="";
    //model:any={};
    error: string;
    user: Usuario = new Usuario('','');

  constructor(private router: Router, private auth: Auth){}   //, private auth: Auth) { }

  ngOnInit() {
    // reset login status
    this.auth.logout();
  }

   btnAdministrador(){
    this.user.correo = 'admin@admin.com';
    this.user.passw = '3333';
  }

  btnEncargado(){
    this.user.correo = 'encargado@encargado.com.ar';
    this.user.passw = '1111';
  }

  btnEmpleado(){
    this.user.correo = 'empleado@empleado.com';
    this.user.passw = '0000';
  }

  btnCliente(){
    this.user.correo = 'cliente@cliente.com.ar';
    this.user.passw = 'cliente';
  }
  
  loginUsuario(){
  
      if (this.user.correo == 'admin@admin.com') {
        this.router.navigate(['/admin']);
      }
        //console.log('no admin');

      if (this.user.correo == 'cliente@cliente.com.ar') {
        this.router.navigate(['/cliente']);
      }
      else 
        return;
  }


}