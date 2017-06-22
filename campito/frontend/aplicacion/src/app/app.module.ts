import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { AdminComponent } from './componentes/admin/admin.component';

import {APP_ROUTING} from './componentes/app.routes';
import {AdminRoutingModule} from './componentes/admin/admin-routing.module';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import {SubirArchivosComponent} from './componentes/subir-archivos/subir-archivos.component';
import {FileUploadModule} from  '../../node_modules/ng2-file-upload';
import {ListaClientesService} from './servicios/lista-clientes.service';
import { ListaClientesComponent } from './componentes/lista-clientes/lista-clientes.component';
import { PerfilClienteComponent } from './componentes/perfil-cliente/perfil-cliente.component';
import { RegistrarClienteComponent } from './componentes/registrar-cliente/registrar-cliente.component';
//import {AuthenticationService} from './servicios/athentication.service';
//import { AUTH_PROVIDERS } from 'angular2-jwt';
import { Auth } from './servicios/auth.service';
import { AuthGuard } from './auth-guard';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { PropiedadesComponent } from './componentes/propiedades/propiedades.component';




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
    PropiedadesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBgZFLq8XuoNexPw7bLNns9fgiIOfDVvaU' }),
    HttpModule,
    APP_ROUTING,
    AdminRoutingModule,
    FileUploadModule
  
  ],
  providers: [ListaClientesService,  Auth, AuthGuard], //AUTH_PROVIDERS,
  bootstrap: [AppComponent]
})
export class AppModule { }
