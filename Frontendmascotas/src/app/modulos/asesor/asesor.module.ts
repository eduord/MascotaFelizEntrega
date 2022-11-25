import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsesorRoutingModule } from './asesor-routing.module';
import { CrearAfiliacionComponent } from './afiliacion-mascota/crear-afiliacion/crear-afiliacion.component';
import { AceptarSolicitudComponent } from './solicitudes/aceptar-solicitud/aceptar-solicitud.component';
import { RechazarSolicitudComponent } from './solicitudes/rechazar-solicitud/rechazar-solicitud.component';
import { EditarAfiliacionComponent } from './afiliacion-mascota/editar-afiliacion/editar-afiliacion.component';
import { EliminarAfiliacionComponent } from './afiliacion-mascota/eliminar-afiliacion/eliminar-afiliacion.component';
import { BuscarAfiliacionComponent } from './afiliacion-mascota/buscar-afiliacion/buscar-afiliacion.component';
<<<<<<< HEAD
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> 91ee1f9a5ca1a0cdc0e34bc6b2bdda8b2371b856



@NgModule({
  declarations: [
    CrearAfiliacionComponent,
    EditarAfiliacionComponent,
    EliminarAfiliacionComponent,
    BuscarAfiliacionComponent,
    AceptarSolicitudComponent,
    RechazarSolicitudComponent,
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AsesorModule { }
