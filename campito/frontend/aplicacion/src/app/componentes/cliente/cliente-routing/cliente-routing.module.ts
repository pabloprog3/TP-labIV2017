
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, CanActivate } from '@angular/router';
import { VerificarJWTService } from '../../../servicios/verificar-jwt.service';
import { DetallePropiedadComponent } from '../../detalle-propiedad/detalle-propiedad.component';
import { ListaPropiedadesComponent } from '../../lista-propiedades/lista-propiedades.component';




const CLIENTE_ROUTES: Routes = [
  
  { path:'clientes', canActivate: [VerificarJWTService], component:ListaPropiedadesComponent, children: [
      {path: 'detalle/:id', canActivate: [VerificarJWTService], component: DetallePropiedadComponent}
    ]
  }

];
 


@NgModule({
  imports: [
    RouterModule.forChild(CLIENTE_ROUTES)
  ],
  exports: [
    RouterModule
  ],
  providers: [ListaPropiedadesComponent]
})
export class ClienteRoutingModule { }

