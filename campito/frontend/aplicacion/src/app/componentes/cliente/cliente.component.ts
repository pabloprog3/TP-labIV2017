import { Component, OnInit, Input } from '@angular/core';
//import { AgmMap, AgmMarker } from '@agm/core';
import { ListaSucursalesComponent } from '../lista-sucursales/lista-sucursales.component';
import { SucursalesService } from '../../servicios/sucursales.service';
import { Router } from '@angular/router';
import { PropiedadService } from '../../servicios/propiedad.service';

import { AutService } from '../../servicios/aut.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  private pathImages: string = '../../../assets/fotos/sucursales';
  lat: number;
  lng: number;
  map: any;
  mapaVisible: boolean;
  listaPropiedades: Object;
  public titulomapa: string;

  constructor(private auth: AutService, private servicio: SucursalesService, private router: Router, private servicioProp: PropiedadService) { }

  ngOnInit() {

    this.mapaVisible = false;
    this.titulomapa = 'Ver Mapa';
    this.cargarPropiedades();

  }

mostrarMapaBool(){
  if (this.mapaVisible == false) {
    this.mapaVisible = true;
    this.titulomapa = 'Ocultar Mapa';
  }else{
    this.mapaVisible = false;
    this.titulomapa = 'Ver Mapa';
  }
}



cargarPropiedades(){
  
  this.servicioProp.getPropiedades().subscribe(
    data => { this.listaPropiedades = data;
    });

}

comprar(){

}


alquilar(){
  
}

salir(){
  this.auth.logOut();
}




}
