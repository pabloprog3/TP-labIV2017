//CONFIGURAR LAS RUTAS INTERNAS QUE USA EL COMPONENTE ADMIN

import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AdminComponent} from '../admin/admin.component';
import {UsuariosComponent} from '../usuarios/usuarios.component';
import {EmpleadosComponent} from '../empleados/empleados.component';
import {ListaClientesService} from '../../servicios/lista-clientes.service';
import {ListaClientesComponent} from '../lista-clientes/lista-clientes.component';
import {PerfilClienteComponent} from '../perfil-cliente/perfil-cliente.component';
 
const ADMIN_ROUTES: Routes = [
  
  { path:'usuarios', component:UsuariosComponent, children: [
        //{path: 'usuarios', component:UsuariosComponent},
        {path: 'empleados', component:EmpleadosComponent},
        {path: 'listaClientes', component:ListaClientesComponent},
        {path: 'perfilCliente/:correo', component:PerfilClienteComponent}
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