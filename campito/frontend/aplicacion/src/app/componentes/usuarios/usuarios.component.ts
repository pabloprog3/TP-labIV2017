import { Component, OnInit, Input, Output, NgZone } from '@angular/core';
import {Router} from '@angular/router';

import {ListaClientesComponent} from '../lista-clientes/lista-clientes.component';
import {PerfilClienteComponent} from '../perfil-cliente/perfil-cliente.component';

import {Cliente} from '../../clases/Cliente';
import {Empleado} from '../../clases/Empleado';

import { ListaClientesService } from '../../servicios/lista-clientes.service';
import { EmpleadosService } from '../../servicios/empleados.service'


import { FormGroup, FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
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
   sueldo: number = 0;
   form: FormGroup;
   formEmp: FormGroup;
   cliente: Cliente;
   errorFoto: boolean;
   mostrarProgreso:boolean;
   mostrarFoto:boolean;
   file:any;
   files: any[] = [];
   image: any;
  
  constructor(private router: Router, private fb: FormBuilder, private fbe: FormBuilder, private servicio: ListaClientesService, private servicioEmp: EmpleadosService) {
    this.crearControles();
    this.crearControlesEmpleado();
   }

  ngOnInit() {
    this.mostrarPropiedad = false;
    this.datosDpto = false;
    this.categoria = "clie";
    this.errorFoto = false;
    this.mostrarProgreso = false;
    this.mostrarFoto = true;

    if (this.perfil=="cliente") {
      this.mostrarEmpleados = false;
    }
    else{
      this.mostrarEmpleados = true;
    }

  }



  crearControlesEmpleado(){
    this.formEmp = this.fbe.group({
        id_sucursal: '1',
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
        foto: null,
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
              Validators.required, Validators.maxLength(30), Validators.minLength(8), Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z_]+([.][a-zA-Z_]+)*[.][a-zA-Z]{1,5}')
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

    this.servicio.postCliente(this.form.value)
        .subscribe(
         // resp => console.log(resp),
         // err => console.log(err),
        );
        this.form.reset();
        this.goLista();
  }

  procesarFoto(evento){
    this.mostrarFoto = true;
    //traigo el div donde se va a mostrar la imagen
    var foto = document.getElementById('foto');
    foto.innerHTML = '';
    //traigo array con archivos seleccionados si fueran mas de 1
    var archivos = evento.target.files;
    //almaceno la imagen
    var archivo = archivos[0];
    //verifico que selecciono un archivo
    if (!archivo) {
      return;
    }else{
      
    //verifico que sea tipo imagen
    if(!archivo.type.match(/image.*/i)){
      this.mostrarProgreso=false;
      this.errorFoto = true;
    }else{
      this.errorFoto = false;
      this.mostrarProgreso = true;
      this.mostrarFoto = true;

      let fileList:FileList = evento.target.files;

      for (let i = 0; i < fileList.length; i++) {
        this.file = fileList[i];
         console.log("files are: ",this.file);
         this.files.push(this.file);
         console.log('files []', this.files);
      } 
      
      //guardo los datos del archivo para mostrar junto con la imagen
      foto.innerHTML += 'Nombre Archivo: ' + archivo.name + '<br>';
      foto.innerHTML += 'Tamaño: ' + archivo.size + ' bytes<br>';
      
      //instancio el lector de archivos FileReader para procesar imagen antes de subir al servidor
      var reader = new FileReader();
      //asignar metodo mostrar si cargo una imagen
      reader.addEventListener('load', this.mostrar);
      //asignar metodo para mostrar progressbar
      reader.addEventListener('progress', this.progreso);
      
      //retorna el contenido del archivo en formato data:url
      reader.readAsDataURL(archivo);
      //this.datos.append('file', evento.target.files);
      //console.log('file', evento.target.files);
      this.formEmp.value.foto =  evento.srcElement.files;
    
      console.log('formulario', this.formEmp.value);
      }

    }
  }

  mostrar(e){
    //guardo el contenido del archivo desde la propiedad result del FileReader
    var resultado = e.target.result;
    var foto = document.getElementById('foto');
    foto.innerHTML += '<img width=80px src="'+resultado+'">';
  }

  progreso(e){
    var progreso = document.getElementById('progreso');
    var porcentaje=parseInt((e.loaded/e.total*100).toString());
    progreso.innerHTML = '<progress value="'+porcentaje+'" max="100">'+porcentaje+'%</progress>'; 
  }


  guardarEmpleado(evento){
    this.mostrarFoto = false;
    console.log('files: ', evento);
    console.log(this.formEmp.value);
    
    /*
    let formData:FormData = new FormData();
    formData.append('archivo', this.img);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://pabloutn.esy.es/TP-labIV2017/campito/backend/ws/apirest/src/rutas/apirest.php', true);
    xhr.send(formData);
  */

    /*console.log('evento:', evento);
    console.log('----------------------------------------');
    console.log('form data:', this.datos);
    console.log('----------------------------------------');*/

    this.servicioEmp.postEmpleado(this.formEmp.value, [], this.formEmp.value.foto)
        .subscribe(
          resp => console.log(resp),
          err => console.log(err),
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
