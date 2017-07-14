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

   cliente: Cliente;

   clienteForm: FormGroup;
   mostrarPropiedad:boolean=false;
   categoria:string;

  constructor(private route: ActivatedRoute, private servicio: ListaClientesService, 
    private location: Location, private fb: FormBuilder, private router: Router) {     

      this.clienteForm = this.fb.group({
      nombre: '',
      apellido: '',
      dni: '',
      telefono: '',
      correo: '',
  });

}

  ngOnInit() {    
      let correo = this.route.snapshot.params['correo'];
      if(!correo){
        return;
      }
      else{
        this.cargarCliente(correo);
      }
  }

cargarCliente(correo){
      this.servicio.getClienteCorreo(correo)     
        .subscribe(
          r => this.cliente=r,
          er => console.log(er),
          () => this.mostrarDatos()
        );
     
}


mostrarDatos(){
  this.clienteForm.patchValue({
          nombre: this.cliente[0].nombre,
          apellido: this.cliente[0].apellido,
          dni: this.cliente[0].dni,
          correo: this.cliente[0].correo,
          telefono: this.cliente[0].telefono
       });
       //console.log(this.clienteForm.getRawValue());
}

  volver(){
    this.location.back();
  }


  mostrarForm(categoria){
     if (categoria=='due') {
       this.mostrarPropiedad = true;
     }
     else{
       this.mostrarPropiedad = false;
     }
    
  }


updateCliente(){
    this.servicio.updateCliente(this.clienteForm.value).subscribe();
    this.router.navigate(['usuarios']);
}

}
