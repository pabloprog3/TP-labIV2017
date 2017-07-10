import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {Cliente} from '../../clases/Cliente';
import { EmpleadosService } from "../../servicios/empleados.service";
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css', '../usuarios/usuarios.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

   lista: Array<any>;
   foto: string = "../../../assets/fotos/empleados";

  constructor(private servicio: EmpleadosService, private router: Router) { 
    this.servicio.getEmpleados().subscribe(data => { 
      this.lista = data;
    });
  }

  ngOnInit() {
  }


exportarCSV(){
 var data = JSON.stringify(this.lista);
 
var options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true, 
    showTitle: false,
    useBom: false
  };
 
new Angular2Csv(data, 'Reporte_Clientes.txt', options);
}

}
