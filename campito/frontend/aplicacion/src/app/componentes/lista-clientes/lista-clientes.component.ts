import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import {Cliente} from '../../clases/Cliente';
import { ListaClientesService } from "../../servicios/lista-clientes.service";
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
//import { PdfmakeService } from 'ng-pdf-make/pdfmake/pdfmake.service';
//import { Cell, Row, Table } from 'ng-pdf-make/objects/table';


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css', '../usuarios/usuarios.component.css']
})
export class ListaClientesComponent implements OnInit {

  lista: Array<Cliente>;

  
  constructor(private servicio: ListaClientesService, private router: Router) {
      this.servicio.getClientes().subscribe(data => { 
      this.lista = data;
    });

   }




  ngOnInit() {
  
    //console.log('lista: ', this.lista);
  }


 editarCliente(item: Cliente){
  let correo = item.correo
  console.log('llevando correo: ', correo);
  this.router.navigate(['/usuarios/perfilCliente/', correo]);


 }

 borrarCliente(item: Cliente){
  //this.router.navigate(['/usuarios/perfilCliente/',  item.correo]);
  this.servicio.deleteCliente(item).subscribe();
  this.goLista();
 }
  



goLista(){
  this.router.navigate(['usuarios']);
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


formatoPDF(){
  /*
  // Create Headers cells
    const header1 = new Cell('Header1');
    const header2 = new Cell('Header2');
    const header3 = new Cell('Header3');
 
    // Create headers row
    const headerRows = new Row([header1, header2, header3]);
 
    // Create a content row
    const row1 = new Row([new Cell('One value goes here '), new Cell('Another one here'), new Cell('OK?')]);
 
    // Custom  column widths
    const widths = [100, '*', 200, '*'];
 
    // Create table object
    const table = new Table(headerRows, [row1], widths);
 
    // Add table to document
    this.pdfmake.addTable(table);
*/

}

exportarPDF(){
     
    //this.formatoPDF();
    //this.pdfmake.download('Report_Clientes.pdf');
    
  }




}






