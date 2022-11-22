import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AceptarSolicitudComponent } from './solicitudes/aceptar-solicitud/aceptar-solicitud.component';
import { RechazarSolicitudComponent } from './solicitudes/rechazar-solicitud/rechazar-solicitud.component';

const routes: Routes = [
  {
    path:'aceptarSolicitud',
    component: AceptarSolicitudComponent
  },
  {
    path:'rechazarSolicitud',
    component: RechazarSolicitudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
