import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    RegistrarClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    AdminRoutingModule,
    FileUploadModule
  
  ],
  providers: [ListaClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
