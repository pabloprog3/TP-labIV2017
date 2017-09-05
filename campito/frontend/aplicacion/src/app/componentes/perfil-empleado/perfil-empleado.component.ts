import { Component, OnInit, Input, Output, Pipe } from '@angular/core';
import {Location} from '@angular/common';
import { EmpleadosService } from '../../servicios/empleados.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Empleado } from '../../clases/Empleado';
import { FormGroup, Validators, FormBuilder, Validator } from '@angular/forms';

@Component({
  selector: 'app-perfil-empleado',
  templateUrl: './perfil-empleado.component.html',
  styleUrls: ['./perfil-empleado.component.css']
})
export class PerfilEmpleadoComponent implements OnInit {

    
    empleado: Empleado = new Empleado('', '', '', '', '', '', '', 0, '',0, '', '');

    formEmp: FormGroup;

  constructor(private route: ActivatedRoute, private servicio: EmpleadosService, 
    private location: Location, private fb: FormBuilder, private router: Router) { 

      this.formEmp = this.fb.group({
      id_sucursal: '',
      perfil: '',
      nombre: '',
      apellido: '',
      dni: '',
      telefono: '',
      sueldo: '',
      correo: '',
      fecha_nac: ''      
  });

    }


  

  ngOnInit() {
  
    let correo = this.route.snapshot.params['correo'];
      if(!correo){
        return;
      }
      else{
        this.cargarEmpleado(correo);
      }

  }

  cargarEmpleado(correo){
      this.servicio.getEmpleadoCorreo(correo)
        .subscribe(
          r => this.empleado=r,
          er => console.log(er),
          () => this.mostrarDatos()
        );
     
}


mostrarDatos(){
  this.formEmp.patchValue({
          id_sucursal: this.empleado[0].id_sucursal,
          tipo_emp: this.empleado[0].perfil,
          nombre: this.empleado[0].nombre,
          apellido: this.empleado[0].apellido,
          dni: this.empleado[0].dni,
          telefono: this.empleado[0].telefono,
          sueldo: this.empleado[0].sueldo,
          correo: this.empleado[0].correo,
          fecha_nac: this.empleado[0].fecha_nac
       });
       //console.log(this.formEmp.getRawValue());
}

modificarEmpleado(){
  this.servicio.updateEmpleado(this.formEmp.value).subscribe();
  //console.log('log: ', this.formEmp.getRawValue());
  this.router.navigate(['usuarios']);
}


}
