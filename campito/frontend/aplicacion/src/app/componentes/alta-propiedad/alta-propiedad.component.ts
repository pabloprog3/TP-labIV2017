import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { Location } from "@angular/common";
import { PropiedadService } from '../../servicios/propiedad.service';



@Component({
  selector: 'app-alta-propiedad',
  templateUrl: './alta-propiedad.component.html',
  styleUrls: ['./alta-propiedad.component.css', '../usuarios/usuarios.component.css']
})
export class AltaPropiedadComponent implements OnInit {
   form: FormGroup;
   mostrarDatosDpto: boolean;
   mostrarTxtAlquiler: boolean;
   mostrarTxtVenta: boolean;
   habilitar: boolean;
   mostrarSpan:boolean=false;
   mostrarBtnReg:boolean;
   path: string = '../../../assets/fotos/propiedades/';
   foto1: string ='';
   foto2: string ='';
   foto3: string ='';
   foto4: string ='';
   dni: string = '';



  constructor(private router: Router, private fb: FormBuilder, private fbe: FormBuilder, private location:Location, private servicio: PropiedadService) { 
    this.crearControles();
  }

  ngOnInit() {
    this.mostrarDatosDpto = false;
    this.mostrarTxtAlquiler = false;
    this.mostrarTxtVenta = false;
    this.habilitar = false;
    //this.mostrarBtnReg = true;
  }




  crearControles(){
    this.form = this.fb.group({
        id_sucursal: '',
        tipo_prop: '',
        num_piso: 1,
        num_depto: '',
        direccion: ['', Validators.compose([
              Validators.required, Validators.pattern('[a-zA-Z0-9 ].+'), Validators.minLength(5), Validators.maxLength(30)
        ])],
        provincia: ['', Validators.compose([
              Validators.required, Validators.pattern("[A-Za-z ]+")
        ])],
        localidad: ['', Validators.compose([
              Validators.required, Validators.maxLength(30),Validators.pattern('[A-Za-z ]+')
        ])],
        disponibilidad_alquiler:'',
        precio_alquiler:0,
        disponibilidad_venta:'',
        precio_venta:0,
        foto1: '',
        foto2:'',
        foto3:'',
        foto4:'',
        nombre_duenio:['', Validators.compose([
              Validators.required, Validators.maxLength(50), Validators.minLength(4),Validators.pattern('[A-Za-z]+')
        ])],
        apellido_duenio:['', Validators.compose([
              Validators.required, Validators.maxLength(50), Validators.minLength(8),Validators.pattern('[A-Za-z]+')
        ])],
        dni: ['', Validators.compose([
              Validators.required, Validators.maxLength(8), Validators.minLength(8),Validators.pattern('[0-9]+')
        ])],
        telefono:['', Validators.compose([
              Validators.required, Validators.maxLength(10),Validators.minLength(8), Validators.pattern('[0-9]+')
        ])],
        correo: ['',Validators.compose([
              Validators.required, Validators.minLength(5), Validators.maxLength(60), Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]')
        ])],
        fecha_nac: ['', Validators.compose([
              Validators.required
        ])]
    });
  }
  

  activarBotonReg(){

  }

mostrarOcultarDpto(valor){
  if (valor=="departamento") {
    this.mostrarDatosDpto = true;
  } else {
    this.mostrarDatosDpto = false;
  }
}



mostrarOcultarTXTAlquiler(valor){
  if (valor=="sí") {
    this.mostrarTxtAlquiler = true;
  }else{
    this.mostrarTxtAlquiler = false;
  }
}

mostrarOcultarTXTVenta(valor){
  if (valor=="sí") {
     this.mostrarTxtVenta = true;
  }else{
    this.mostrarTxtVenta = false;
  }
  
}


disableSendButton($event){
  //console.log('evento disable', $event);


}

imageUploaded(event){
  //console.log(event);

  this.habilitar = true;
  this.mostrarSpan = false;
  if(this.foto1==''){
    this.foto1 =event;//this.path + this.dni + '_' + $event.file.name;
    console.log('file: ', this.foto1);
    this.form.patchValue({
      foto1: this.foto1
    })
  }else if(this.foto2==''){
    this.foto2 =  event;//this.path + this.dni + '_' + event.file.name;
    this.form.patchValue({
      foto2: this.foto2
    })     
  }else if (this.foto3=='') {
    this.foto3 = event; // this.path + this.dni + '_' + event.file.name;
    this.form.patchValue({
      foto3: this.foto3
    })
  }else{
    this.foto4 = event; // this.path + this.dni + '_' + event.file.name;
    this.form.patchValue({
      foto4: this.foto4
    })
  }
  
  
}

imageRemoved($event){

}

guardarPropiedad(){
       if (!this.habilitar) {
           this.mostrarSpan = true;
      }else{
            this.mostrarSpan = false;
            //console.log(this.form.value);
            this.servicio.postPropiedad(this.form.value).subscribe(
            e=>console.log(e)
            );
            this.form.reset();
     }
     
  }


volver(){
  this.activarBotonReg();
  this.location.back();
}





}
