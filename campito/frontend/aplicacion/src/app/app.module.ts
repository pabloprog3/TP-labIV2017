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
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import {SubirArchivosComponent} from './componentes/subir-archivos/subir-archivos.component';
import {FileUploadModule} from  '../../node_modules/ng2-file-upload';
import {ListaClientesService} from './servicios/lista-clientes.service';
import { ListaClientesComponent } from './componentes/lista-clientes/lista-clientes.component';
import { PerfilClienteComponent } from './componentes/perfil-cliente/perfil-cliente.component';
import { RegistrarClienteComponent } from './componentes/registrar-cliente/registrar-cliente.component';
//import {AuthenticationService} from './servicios/athentication.service';
//import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AutService } from './servicios/aut.service';
import { VerificarJWTService } from './servicios/verificar-jwt.service';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ListaPropiedadesComponent } from './componentes/lista-propiedades/lista-propiedades.component';
//import { PropiedadesComponent } from './componentes/propiedades/propiedades.component';
import { SucursalesService } from './servicios/sucursales.service';
import { ListaSucursalesComponent } from './componentes/lista-sucursales/lista-sucursales.component';
//import { GOOGLE_MAPS_PROVIDERS } from 'angular2-google-map';
//import { PdfmakeModule } from 'ng-pdf-make';
import { PropiedadService } from './servicios/propiedad.service';
import { EmpleadosService } from './servicios/empleados.service';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';

//import { UPLOAD_DIRECTIVES, NgFileSelectDirective } from '../../node_modules/ng2-uploader/ng2-uploader';
import { Ng2UploaderModule } from 'ng2-uploader';
import { PerfilEmpleadoComponent } from './componentes/perfil-empleado/perfil-empleado.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { AuthModule } from './auth.module';
import {LoginService} from './servicios/login.service';



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
    EmpleadosComponent
    //UPLOAD_DIRECTIVES,
    //NgFileSelectDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBgZFLq8XuoNexPw7bLNns9fgiIOfDVvaU' }),
    HttpModule,
    APP_ROUTING,
    AdminRoutingModule,
    FileUploadModule,
    Ng2UploaderModule,
    AuthModule
    //UPLOAD_DIRECTIVES,
    //PdfmakeModule
  
  ],
  providers: [ListaClientesService, EmpleadosService, SucursalesService, PropiedadService, LoginService, AutService, VerificarJWTService], //AUTH_PROVIDERS,
  bootstrap: [AppComponent]
})
export class AppModule { }
