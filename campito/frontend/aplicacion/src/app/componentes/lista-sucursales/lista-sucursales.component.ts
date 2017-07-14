import { Component, OnInit, Input } from '@angular/core';
import { SucursalesService } from '../../servicios/sucursales.service';
import { AgmMap, AgmMarker } from '@agm/core';
//import {} from ''



@Component({
  selector: 'app-lista-sucursales',
  templateUrl: './lista-sucursales.component.html',
  styleUrls: ['./lista-sucursales.component.css']
})
export class ListaSucursalesComponent implements OnInit {

  lista: Object;
  @Input() mapaVisible:boolean;
  //@Input('lista') listaSuc;
  zoom:number = 10;
  latitud:number;
  longitud:number;

  constructor(private servicio: SucursalesService) { }

  ngOnInit() {
 
   this.servicio.getSucursales().toPromise().then(
     (data) => { this.lista = data;
     });
  //console.log("Lista: ", this.lista);
}


 mapaClikeado($event){
   // console.log(this.lista);
  }


/*
         this.servicio.getSucursales().then(
      (data) => { this.listaSuc = data;
    });

*/





}
