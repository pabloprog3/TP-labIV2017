import { Component, OnInit, Input, Output, NgZone } from '@angular/core';
import {Router} from '@angular/router';
//import {SubirArchivosComponent} from '../subir-archivos/subir-archivos.component';
import {ListaClientesComponent} from '../lista-clientes/lista-clientes.component';
import {PerfilClienteComponent} from '../perfil-cliente/perfil-cliente.component';

import {Cliente} from '../../clases/Cliente';

import { ListaClientesService } from '../../servicios/lista-clientes.service';
import { EmpleadosService } from '../../servicios/empleados.service'


import { FormGroup, FormBuilder, Validators} from '@angular/forms';
//import {UPLOAD_DIRECTIVES } from '../../../../node_modules/ng2-uploader/ng2-uploader';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  //directives: [UPLOAD_DIRECTIVES],
})
export class UsuariosComponent implements OnInit {
   mostrarPropiedad: boolean; //si el radioButton es dueño, muestra el formulario de propiedades
   datosDpto:boolean; //si selecciona departamento, muestra los datos para el mismo
   categoria: string;
   mostrarTxtAlquiler: boolean = false;
   alquilerBool: boolean = false;
   mostrarTxtVenta: boolean = false;
   VentaBool: boolean = false;
   mostrarEmpleados: boolean;
   mostrarClientes: boolean = true;
   @Input() perfil: string='';
   //model;
   form: FormGroup;
   formEmp: FormGroup;
   cliente: Cliente;

   //variables necesarias para la foto
   sizeLimit = 20000;
   uploadFile: any;
   @Input() options: Object = {
         url: 'http://localhost:8080/TP-labIV2017/campito/backend/ws/apirest/public/index.php/empleados/foto'
   };
  
  
  constructor(private router: Router, private fb: FormBuilder, private fbe: FormBuilder, private servicio: ListaClientesService, private servicioEmp: EmpleadosService) {
    this.crearControles();
    this.crearControlesEmpleado();
   }

  ngOnInit() {
    this.mostrarPropiedad = false;
    this.datosDpto = false;
    this.categoria = "clie";
    //console.log('perfil:', this.perfil ); OK

    if (this.perfil=="cliente") {
      this.mostrarEmpleados = false;
    }
    else{
      this.mostrarEmpleados = true;
    }


  }

  
  /*beforeUpload(uploadingFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('Archivo demasiado pesado');
    }
  }*/

  handleUpload(data): void {
        console.log(data);
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadFile = data;
        }
    }


  crearControlesEmpleado(){
    this.formEmp = this.fbe.group({
        id_sucursal: '',
        tipo_emp: '',
        nombre: ['', Validators.compose([
              Validators.required, Validators.pattern('[A-Za-z ]+')
        ])],
        apellido: ['', Validators.compose([
              Validators.required, Validators.maxLength(35), Validators.minLength(4),Validators.pattern('[A-Za-z ]+')
        ])],
        dni: ['', Validators.compose([
              Validators.required, Validators.maxLength(10), Validators.minLength(8),Validators.pattern('[0-9]+')
        ])],
        foto: '',
        fecha_nac: ['', Validators.required],
        sueldo: ['', Validators.compose([
              Validators.required, Validators.maxLength(7), Validators.minLength(4)
        ])],
        passw: ['', Validators.compose([
              Validators.required, Validators.maxLength(15), Validators.minLength(4),Validators.pattern('[A-Za-z]+||[0-9]+')
        ])],
        telefono: ['', Validators.compose([
              Validators.required, Validators.maxLength(10), Validators.minLength(8),Validators.pattern('[0-9]+')
        ])],
        correo:['', Validators.compose([
              Validators.required, Validators.maxLength(30), Validators.minLength(8), Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]+')
        ])]
    });
  }

  crearControles(){
    this.form = this.fb.group({
        nombre: ['', Validators.compose([
              Validators.required, Validators.maxLength(35), Validators.minLength(4),Validators.pattern('[A-Za-z]+')
        ])],
        apellido: ['', Validators.compose([
              Validators.required, Validators.maxLength(35), Validators.minLength(4),Validators.pattern('[A-Za-z]+')
        ])],
        dni: ['', Validators.compose([
              Validators.required, Validators.maxLength(10), Validators.minLength(8),Validators.pattern('[0-9]+')
        ])],
        passw: ['', Validators.compose([
              Validators.required, Validators.maxLength(15), Validators.minLength(4),Validators.pattern('[A-Za-z]+||[0-9]+')
        ])],
        telefono: ['', Validators.compose([
              Validators.required, Validators.maxLength(10), Validators.minLength(8),Validators.pattern('[0-9]+')
        ])],
        correo: ['', Validators.compose([
              Validators.required, Validators.maxLength(30), Validators.minLength(8), Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')
        ])]
    });
  }
  
  mostrarForm(categoria){
   //console.log(this.categoria);
   if (categoria=='due') {
     //console.log("categoria: ", categoria);
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

  
  guardarCliente(){
    let nombre=document.getElementById('nombre');
    let apellido=document.getElementById('apellido');
    let dni=document.getElementById('dni');
    let passw=document.getElementById('passw');
    let telefono=document.getElementById('telefono');
    let correo=document.getElementById('correo');
    
    console.log('probando console.log', nombre);

    this.servicio.postCliente(this.form.value)
        .subscribe(
         // resp => console.log(resp),
         // err => console.log(err),
        );
        this.form.reset();
        this.goLista();
  }

  

  guardarEmpleado(){
    this.servicioEmp.postEmpleado(this.formEmp.value)
        .subscribe(
         // resp => console.log(resp),
         // err => console.log(err),
        );
        this.formEmp.reset();
        this.goLista();
  }


goLista(){
  this.router.navigate(['usuarios']);
}


volver(){
  this.router.navigate(['/login']);
}

}
