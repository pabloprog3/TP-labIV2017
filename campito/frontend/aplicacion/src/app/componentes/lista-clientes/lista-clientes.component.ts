import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Cliente} from '../../clases/Cliente';
import { ListaClientesService } from "../../servicios/lista-clientes.service";


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css', '../usuarios/usuarios.component.css']
})
export class ListaClientesComponent implements OnInit {

  lista: Array<Cliente>;

  constructor(private servicio: ListaClientesService, private router: Router) { }

  ngOnInit() {
    this.servicio.getClientes().subscribe(data => { 
      this.lista = data;
      //console.log(this.lista);
    });
    
    //console.log('lista: ', this.lista);
  }


 editarCliente(correo){
  //console.log("ID: ", correo);
  
  this.router.navigate(['/usuarios/perfilCliente/' + correo]);

 }

 borrarCliente(correo){
  this.router.navigate(['/usuarios/perfilCliente/' + correo], correo);
 }
  


  

}
