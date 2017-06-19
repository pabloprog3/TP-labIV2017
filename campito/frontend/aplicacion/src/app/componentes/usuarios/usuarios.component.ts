import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SubirArchivosComponent} from '../subir-archivos/subir-archivos.component';
import {ListaClientesComponent} from '../lista-clientes/lista-clientes.component';
import {PerfilClienteComponent} from '../perfil-cliente/perfil-cliente.component';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
   mostrarPropiedad: boolean; //si el radioButton es dueño, muestra el formulario de propiedades
   datosDpto:boolean; //si selecciona departamento, muestra los datos para el mismo
   categoria: string;
   mostrarTxtAlquiler: boolean = false;
   alquilerBool: boolean = false;
   mostrarTxtVenta: boolean = false;
   VentaBool: boolean = false;
   
   model;

  constructor(private router: Router) { }

  ngOnInit() {
    this.mostrarPropiedad = false;
    this.datosDpto = false;
    this.categoria = "clie";

  }


  mostrarForm(categoria){
   //console.log(this.categoria);
   if (categoria=='due') {
     this.mostrarPropiedad = true;
   }
   else{
     this.mostrarPropiedad = false;
   }
    
  }

  mostrarDatosDpto(valor){
    //console.log(valor);
    if (valor=="departamento") {
      this.datosDpto = true;
    }
    else{
      this.datosDpto = false;
    }
  }

  mostrarTXTAlquiler(alquiler){
    //console.log(alquiler);
    if (alquiler=true) {
      this.mostrarTxtAlquiler = true;
    } else {
      this.mostrarTxtAlquiler = false;
    }
  }

  mostrarTXTVenta(venta){
    //console.log(venta);
    if (venta=true) {
      this.mostrarTxtVenta = true;
    } else {
      this.mostrarTxtVenta = false;
    }
  }

  submit(){


  }

}
