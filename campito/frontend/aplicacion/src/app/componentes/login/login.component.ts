import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    title = 'Inmobiliarias El Campito S.A.';
    email: string="";
    passw: string="";
    // model:any={};

  constructor(private router: Router) { }

  ngOnInit() {

  }

   btnAdministrador(){
    this.email = 'admin@admin.com';
    this.passw = '3333';
  }

  btnEncargado(){
    this.email = 'encargado@encargado.com.ar';
    this.passw = '1111';
  }

  btnEmpleado(){
    this.email = 'empleado@empleado.com';
    this.passw = '0000';
  }

  btnCliente(){
    this.email = 'cliente@cliente.com.ar';
    this.passw = 'cliente';
  }
  
  loginUsuario(email){
      //console.log(email);
      if (email == 'admin@admin.com') {
        this.router.navigate(['/admin']);
      }
      else 
        console.log('no');
  }


}
