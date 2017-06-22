//CONFIGURAR LAS RUTAS DE LA APLICACION


import { RouterModule, Routes } from '@angular/router';
 
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {RegistrarClienteComponent} from './registrar-cliente/registrar-cliente.component';
//import {UsuariosComponent} from './usuarios/usuarios.component';
//import {ListaClientesComponent} from './lista-clientes/lista-clientes.component';
import {AppComponent} from '../app.component';
import { AuthGuard } from '../auth-guard';

import { ClienteComponent } from "./cliente/cliente.component";
 
const APP_ROUTES: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrarse', component: RegistrarClienteComponent },
  { path: 'cliente', component: ClienteComponent },
  //{path: 'usuarios', component: UsuariosComponent},
  //{path:'usuarios/listaClientes', component: ListaClientesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
  { path: '', component: LoginComponent, canActivate: [AuthGuard] }
];
 
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash :true}); 
//importarlo en app.module.ts y añadirlo a los imports
// por último,  añadir en tu fichero de la aplicación la llamada a este componente.
//Para eso en app.component.html le añadimos lo siguiente :
    //<router-outlet></router-outlet>

