import { Component, OnInit } from '@angular/core';

import { AgmMap, AgmMarker } from '@agm/core';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  private pathImages: string = '../../../assets/fotos/sucursales';
  mostrarTurdera: boolean;
  mostrarRamosMejia: boolean;
  mostrarCaba:boolean;
  lat: number;
  lng: number;
  ocultarmapturdera: boolean;
  ocultarmapramosmejia: boolean;
  ocultarmapcaba: boolean;
  map: any;

  constructor() { }

  ngOnInit() {
    this.mostrarCaba = false;
    this.mostrarRamosMejia = false;
    this.mostrarTurdera = false;
    this.ocultarmapturdera = true;
    this.ocultarmapcaba = true;
    this.ocultarmapramosmejia = true;

  }


  verDetalle(valor){
    switch (valor) {
      case 'turdera':
              this.lat = -34.808611;
              this.lng = -58.223730;
              this.mostrarTurdera = true;
              this.ocultarmapturdera = false;
        break;

        case 'ramosmejia':
               this.lat = -34.643833;
               this.lng = -58.564960;
               this.mostrarRamosMejia=true;
               this.ocultarmapramosmejia = false;
          break;
    
        case 'caba':
               this.lat = -34.579466;
               this.lng = -58.479797;
               this.mostrarCaba = true;
               this.ocultarmapcaba = false;
          break;
    
      default:
        break;
    }
  }


ocultarMapa(valor){
    switch (valor) {
      case 'turdera':
              this.ocultarmapturdera = true;
              this.mostrarTurdera = false;
        break;

        case 'ramosmejia':
               this.ocultarmapramosmejia = true;
               this.mostrarRamosMejia=false;
          break;
    
        case 'caba':
             this.ocultarmapcaba = true;
             this.mostrarCaba = false;
          break;
    
      default:
        break;
    }
  }





}
