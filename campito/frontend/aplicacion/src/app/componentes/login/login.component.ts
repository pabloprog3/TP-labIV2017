import { Component, OnInit } from '@angular/core';
//import {AuthenticationService} from '../../servicios/athentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AutService } from "../../servicios/aut.service";
import { Usuario } from '../../clases/Usuario';
import { AuthHttp } from 'angular2-jwt';
import { LoginService } from '../../servicios/login.service';


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
    jwt;

  constructor(private router: Router, private auth: AutService, public authHttp: AuthHttp, private servicio: LoginService){} 

  ngOnInit() {
    // reset login status
    this.auth.logOut();
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
    //console.log('usuario:', this.user)
      this.servicio.postUser(this.user).subscribe(
          data => {
            localStorage.setItem('token', data.token)
            
            this.auth = new AutService(this.router);
            let perfil = this.auth.getToken().data[0]['perfil'];
            //console.log('perfil: ', perfil);

            switch (perfil) {
              case 'administrador':
                      this.router.navigate(['/admin']);
                break;

              case 'cliente':
                      this.router.navigate(['/cliente']);
                break;

                case 'empleado':
                      this.router.navigate(['/empleado']);
                break;

                case 'encargado':
                      this.router.navigate(['/encargado']);
                break;
            
              default:
                this.router.navigate(['/login']);
                break;
            }

        });
  }


}