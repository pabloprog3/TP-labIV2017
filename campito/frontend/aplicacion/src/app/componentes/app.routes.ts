//CONFIGURAR LAS RUTAS DE LA APLICACION


import { RouterModule, Routes } from '@angular/router';
 
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {RegistrarClienteComponent} from './registrar-cliente/registrar-cliente.component';

import {AppComponent} from '../app.component';

import { ClienteComponent } from "./cliente/cliente.component";
import { EmpleadosComponent } from './empleados/empleados.component';
import { DetallePropiedadComponent } from './detalle-propiedad/detalle-propiedad.component';
import { AltaPropiedadComponent } from './alta-propiedad/alta-propiedad.component';

import {VerificarJWTService } from '../servicios/verificar-jwt.service';

const APP_ROUTES: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrarse', component: RegistrarClienteComponent },
  { path: 'cliente', component: ClienteComponent},
  { path: 'encargado', component: AdminComponent},
  { path: 'empleado', component: RegistrarClienteComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
  { path: '', component: LoginComponent},
  { path: 'alta-propiedades', component: AltaPropiedadComponent}
];
 
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash :true}); 

//importarlo en app.module.ts y añadirlo a los imports
// por último,  añadir en tu fichero de la aplicación la llamada a este componente.
//Para eso en app.component.html le añadimos lo siguiente :
    //<router-outlet></router-outlet>

