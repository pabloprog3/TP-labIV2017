//CONFIGURAR LAS RUTAS INTERNAS QUE USA EL COMPONENTE ADMIN

import {NgModule} from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import {AdminComponent} from '../admin/admin.component';
import {UsuariosComponent} from '../usuarios/usuarios.component';
import {EmpleadosComponent} from '../empleados/empleados.component';
import {ListaClientesService} from '../../servicios/lista-clientes.service';
import {ListaClientesComponent} from '../lista-clientes/lista-clientes.component';
import {PerfilClienteComponent} from '../perfil-cliente/perfil-cliente.component';
import { ListaEmpleadosComponent } from '../lista-empleados/lista-empleados.component';
import { PerfilEmpleadoComponent } from '../perfil-empleado/perfil-empleado.component';

import { VerificarJWTService } from '../../servicios/verificar-jwt.service';
 
const ADMIN_ROUTES: Routes = [
  
  { path:'usuarios', canActivate: [VerificarJWTService], component:UsuariosComponent, children: [
        {path: 'empleados', canActivate: [VerificarJWTService], component:EmpleadosComponent},
        {path: 'listaClientes', canActivate: [VerificarJWTService], component:ListaClientesComponent},
        {path: 'perfilCliente/:correo', canActivate: [VerificarJWTService], component:PerfilClienteComponent},
        {path: 'listaEmpleados', canActivate: [VerificarJWTService], component:ListaEmpleadosComponent},
        {path: 'perfilEmpleado/:correo', canActivate: [VerificarJWTService], component: PerfilEmpleadoComponent}
    ]
  }

];
 

@NgModule({
  imports: [
    RouterModule.forChild(ADMIN_ROUTES),
  ],
  exports: [
    RouterModule
  ],
  providers: [ListaClientesComponent],
})
export class AdminRoutingModule { }