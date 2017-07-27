import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { AdminComponent } from './componentes/admin/admin.component';

import {APP_ROUTING} from './componentes/app.routes';


import {AdminRoutingModule} from './componentes/admin/admin-routing.module';
import { ClienteRoutingModule } from './componentes/cliente/cliente-routing/cliente-routing.module';


import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import {SubirArchivosComponent} from './componentes/subir-archivos/subir-archivos.component';
import {FileUploadModule} from  '../../node_modules/ng2-file-upload';
import {ListaClientesService} from './servicios/lista-clientes.service';
import { ListaClientesComponent } from './componentes/lista-clientes/lista-clientes.component';
import { PerfilClienteComponent } from './componentes/perfil-cliente/perfil-cliente.component';
import { RegistrarClienteComponent } from './componentes/registrar-cliente/registrar-cliente.component';


import { AutService } from './servicios/aut.service';
import { VerificarJWTService } from './servicios/verificar-jwt.service';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ListaPropiedadesComponent } from './componentes/lista-propiedades/lista-propiedades.component';

import { SucursalesService } from './servicios/sucursales.service';
import { ListaSucursalesComponent } from './componentes/lista-sucursales/lista-sucursales.component';
//import { GOOGLE_MAPS_PROVIDERS } from 'angular2-google-map';
//import { PdfmakeModule } from 'ng-pdf-make';
//import { DetallesPropiedadComponent } from './src/app/componentes/detalles-propiedad';
import { PropiedadService } from './servicios/propiedad.service';
import { EmpleadosService } from './servicios/empleados.service';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';

//import { UPLOAD_DIRECTIVES, NgFileSelectDirective } from '../../node_modules/ng2-uploader/ng2-uploader';
import { Ng2UploaderModule } from 'ng2-uploader';
import { PerfilEmpleadoComponent } from './componentes/perfil-empleado/perfil-empleado.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { AuthModule } from './componentes/auth/auth.module';
import {LoginService} from './servicios/login.service';
import { DetallePropiedadComponent } from './componentes/detalle-propiedad/detalle-propiedad.component';
import { TransaccionesService } from './servicios/transacciones.service';
import { EncargadoComponent } from './componentes/encargado/encargado.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { ChartsModule } from 'ng2-charts';
//import { AltaPropiedadesComponent } from './alta-propiedades/alta-propiedades.component';
import { AltaPropiedadComponent } from './componentes/alta-propiedad/alta-propiedad.component';
import {ImageUploadModule} from "angular2-image-upload";

import { EstadisticasService } from './servicios/estadisticas.service';

 //import * as $ from 'jquery'; 
 import { SpinnerModule } from 'angular2-spinner/dist';
 import { SpinnerComponent } from 'angular2-spinner/dist'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UsuariosComponent,
    EmpleadosComponent,
    SubirArchivosComponent,
    ListaClientesComponent,
    PerfilClienteComponent,
    RegistrarClienteComponent,
    ClienteComponent,
    ListaPropiedadesComponent,
    ListaSucursalesComponent,
    ListaEmpleadosComponent,
    PerfilEmpleadoComponent,
    EmpleadosComponent,
    DetallePropiedadComponent,
    EncargadoComponent,
    EstadisticasComponent,
    AltaPropiedadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBgZFLq8XuoNexPw7bLNns9fgiIOfDVvaU' }),
    HttpModule,
    APP_ROUTING,
    AdminRoutingModule,
    ClienteRoutingModule,
    FileUploadModule,
    Ng2UploaderModule,
    AuthModule,
    ChartsModule,
    ImageUploadModule.forRoot(),
    SpinnerModule.forRoot()
  
  ],
  providers: [ListaClientesService, EmpleadosService, SucursalesService, PropiedadService, LoginService, AutService, VerificarJWTService, EstadisticasService , TransaccionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
