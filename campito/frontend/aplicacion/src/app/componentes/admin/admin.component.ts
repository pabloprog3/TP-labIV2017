import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import {ListaClientesComponent} from '../lista-clientes/lista-clientes.component';
import { AutService } from '../../servicios/aut.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private auth: AutService) { }

  ngOnInit() {
  }


  salir(){
    this.auth.logOut();
  }

}
