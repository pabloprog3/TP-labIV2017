import { Component, OnInit, Input } from '@angular/core';
import { ListaSucursalesComponent } from '../lista-sucursales/lista-sucursales.component';
import { SucursalesService } from '../../servicios/sucursales.service';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { PropiedadService } from '../../servicios/propiedad.service';
import { AutService } from '../../servicios/aut.service';
import { DetallePropiedadComponent } from '../detalle-propiedad/detalle-propiedad.component';


@Component({
  selector: 'app-lista-propiedades',
  templateUrl: './lista-propiedades.component.html',
  styleUrls: ['./lista-propiedades.component.css']
})
export class ListaPropiedadesComponent implements OnInit {

  private pathImages: string = '../../../assets/fotos/sucursales';
  listaPropiedades: Object;
  propiedad: Object;
  mostrarBtnAlquiler: boolean;

  mostrarDetalle:boolean=false;

  constructor(private auth: AutService, private servicio: SucursalesService, private router: Router, private servicioProp: PropiedadService) { }

  ngOnInit() {
     this.cargarPropiedades();
     this.mostrarDetalle=false;
  }

  cargarPropiedades(){
  
  this.servicioProp.getPropiedades().subscribe(
    data => { this.listaPropiedades = data;
    });

  }


  irDetalle(item){
 
    this.mostrarDetalle= true;
    if(item['disponibilidad_alquiler']=='sí'){
     
      this.mostrarBtnAlquiler= true;
    }
    else{

     this.mostrarBtnAlquiler = false;
    }

    
    let id = item['id_propiedad'];
    this.propiedad = item;
  }





}
