import { Component, OnInit, Input, Output, Pipe } from '@angular/core';
import {Location} from '@angular/common';
import {ListaClientesService} from '../../servicios/lista-clientes.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Cliente } from '../../clases/Cliente';
import { FormGroup, Validators, FormBuilder, Validator } from '@angular/forms';


@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {

   cliente: Cliente[] = new Array<Cliente>(); 
   //cliente: Cliente[];
   //cliente: Cliente;
   clienteForm: FormGroup;
  mostrarPropiedad:boolean=false;
  categoria:string;

  constructor(private route: ActivatedRoute, private servicio: ListaClientesService, 
    private location: Location, private fb: FormBuilder) {       
      
 

      //this.crearForm();
      this.clienteForm = this.fb.group({
      nombre: '',
      apellido: '',
      dni: '',
      telefono: '',
      correo: '',
      categoria:''
  });

}

  ngOnInit() {    
      let correo = this.route.snapshot.params['correo'];
      if(!correo)
        return;
      else{
        this.cargarCliente(correo);
        console.log('nombre: ', this.cliente["nombre"]);
        this.mostrarDatos();
      }


  }





cargarCliente(correo){
      this.servicio.getClienteCorreo(correo)     
        .subscribe(
          r => this.cliente.push(r),
          er => console.log(er),
          () => this.mostrarDatos()
         //console.log(this.cliente)
        );
        //console.log(this.cliente)
}


mostrarDatos(){
  this.clienteForm.patchValue({
          nombre: this.cliente[0].nombre,
          apellido: this.cliente[0].apellido,
          dni: this.cliente[0].dni,
          correo: this.cliente[0].correo,
          telefono: this.cliente[0].telefono
       });
       console.log(this.clienteForm.getRawValue());
}

  volver(){
    //console.log(this.cliente);
    this.location.back();
  }

/*
  updateCliente(entidad){
    if (!entidad)
      return ;
    
    this.servicio.updateCliente(entidad)
      .subscribe(
        result => console.log(result),
        er => console.log(er)
      )
  } 

*/
  mostrarForm(categoria){
   //console.log(this.categoria);
   if (categoria=='due') {
     this.mostrarPropiedad = true;
   }
   else{
     this.mostrarPropiedad = false;
   }
    
  }


}
