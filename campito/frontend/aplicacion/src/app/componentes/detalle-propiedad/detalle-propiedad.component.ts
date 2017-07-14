import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PropiedadService } from '../../servicios/propiedad.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AutService } from '../../servicios/aut.service';
import { TransaccionesService } from  '../../servicios/transacciones.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-propiedad',
  templateUrl: './detalle-propiedad.component.html',
  styleUrls: ['./detalle-propiedad.component.css']
})
export class DetallePropiedadComponent implements OnInit {

  @Input() propiedad:Object;
  dias_alquiler: number;
  @Input() mostrarBtnAlquiler:boolean;
  mostrarTxtAlquiler:boolean = false;
  form: FormGroup;
  fecha:Date;

  constructor(private location: Location, private servicioTrx: TransaccionesService, private auth: AutService, private route: ActivatedRoute, 
              private fb: FormBuilder, private router: Router, private servicio: PropiedadService) { 

      this.fecha = new Date();
      this.crearControles();
      //console.log('formulario alquiler: ', this.form.getRawValue());
  }

   crearControles(){
      this.form = this.fb.group({
        id_propiedad: 0,
        correo_due: '',
        correo_cli:'',
        precio: '',
        comision: '',
        fecha: '',
        dias: '',
        id_sucursal: 0
      });
   }

  ngOnInit() {     
        this.dias_alquiler = 0;
      if(this.propiedad['disponibilidad_alquiler']=="sí"){
          this.mostrarBtnAlquiler=true;
      }else{
          this.mostrarBtnAlquiler=false;
        }
        
  }



  mostrarTXTAlquiler(){
    if (!this.mostrarTxtAlquiler) {
      this.mostrarTxtAlquiler = true;   
    }
  }

  registrarAlquiler(){
      this.auth = new AutService(this.router);
      let correo_cli = this.auth.getToken().data[0]['correo'];
      //console.log('correo_cli: ', correo_cli);
     
     this.form.patchValue({
          id_propiedad: this.propiedad['id_propiedad'],
          correo_due: this.propiedad['correo'],
          correo_cli:correo_cli,
          precio: this.propiedad['precio_alquiler'] * this.dias_alquiler,
          comision: this.propiedad['precio_alquiler'] * this.dias_alquiler * 0.035,
          fecha: this.fecha,
          dias: this.dias_alquiler,
          id_sucursal: this.propiedad['id_sucursal']
       });
    console.log(this.form.value);
    this.servicioTrx.postAlquiler(this.form.value).subscribe();
    this.form.reset();
    
    
  }


  registrarCompra(){
      this.auth = new AutService(this.router);
      let correo_cli = this.auth.getToken().data[0]['correo'];
      //console.log('correo_cli: ', correo_cli);
     this.fecha = new Date();
     this.form.patchValue({
          id_propiedad: this.propiedad['id_propiedad'],
          correo_due: this.propiedad['correo'],
          correo_cli:correo_cli,
          precio: this.propiedad['precio_venta'],
          comision: this.propiedad['precio_venta'] * 0.048,
          fecha: this.fecha,
          id_sucursal: this.propiedad['id_sucursal']
       });
    
    this.servicioTrx.postCompra(this.form.value).subscribe();
    this.form.reset();
    this.location.back();
  }


}
