import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';


@NgModule({
  declarations: [
    IdentificacionComponent,
    CambiarClaveComponent,
    CerrarSesionComponent,
    RegistrarClienteComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
