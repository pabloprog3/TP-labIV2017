import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, CanActivate } from '@angular/router';
import { VerificarJWTService } from '../../../servicios/verificar-jwt.service';
import { EmpleadosComponent } from '../../empleados/empleados.component';
import { ListaClientesComponent } from '../../lista-clientes/lista-clientes.component';
import { UsuariosComponent } from '../../usuarios/usuarios.component';
//import { RegistrarClienteComponent } from '../../registrar-cliente/registrar-cliente.component';

/*const EMPLEADO_ROUTES: Routes = [
  
  { path:'empleado', canActivate: [VerificarJWTService], component:RegistrarClienteComponent }

];*/

@NgModule({
  imports: [
    //RouterModule.forChild(EMPLEADO_ROUTES)
  ],
  exports: [
    RouterModule
  ],
  //declarations: [RegistrarClienteComponent]
})
export class EmpleadoRoutingModule { }
