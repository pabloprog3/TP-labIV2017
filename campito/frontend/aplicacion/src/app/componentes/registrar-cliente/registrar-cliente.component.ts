import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Cliente} from '../../clases/Cliente';
import {ListaClientesService} from '../../servicios/lista-clientes.service';
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {
  cliente: Cliente;

  constructor(private router: Router, servicio: ListaClientesService) { }


  ngOnInit() {
    this.cliente=new Cliente("","","","","","","","");
 
  }


  public guardar(){
    
  }

  volver(){
    this.router.navigate(['/login']);
  }

}
