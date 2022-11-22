import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { AceptarSolicitudComponent } from './solicitudes/aceptar-solicitud/aceptar-solicitud.component';
import { RechazarSolicitudComponent } from './solicitudes/rechazar-solicitud/rechazar-solicitud.component';


@NgModule({
  declarations: [
    SolicitudesComponent,
    AceptarSolicitudComponent,
    RechazarSolicitudComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule
  ]
})
export class AsesorModule { }
