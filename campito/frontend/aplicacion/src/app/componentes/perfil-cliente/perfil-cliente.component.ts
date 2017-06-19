import { Component, OnInit, Input, Output } from '@angular/core';
import {Location} from '@angular/common';
import {ListaClientesService} from '../../servicios/lista-clientes.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Cliente} from '../../clases/Cliente';


@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {
  @Input() cliente: Cliente;
    

  constructor(private route: ActivatedRoute, private servicio: ListaClientesService, 
    private location: Location) { }

  ngOnInit() {
    
    this.route.params.forEach((params: Params) => {
      let correo = params['correo']; //+params['id'] convierte de string id a number
      console.log('correo en perfil-cliente.component.ts:', correo); //devuelve OK el correo
      this.servicio.getClienteCorreo(correo).subscribe(
        data/*callback*/ => { this.cliente = data });
      
      //console.log('Params: ', correo);
      //console.log('1- cliente encontrado: ', this.cliente); //undefined
    });

    //console.log('2- cliente encontrado: ', this.cliente); //undefined
  }


  volver(){
    //console.log('3- cliente encontrado: ', this.cliente); //aca Sí muestra dato del cliente
    this.location.back();
  }


}
