import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAfiliacionComponent } from './afiliacion-mascota/buscar-afiliacion/buscar-afiliacion.component';
import { CrearAfiliacionComponent } from './afiliacion-mascota/crear-afiliacion/crear-afiliacion.component';
import { EditarAfiliacionComponent } from './afiliacion-mascota/editar-afiliacion/editar-afiliacion.component';
import { EliminarAfiliacionComponent } from './afiliacion-mascota/eliminar-afiliacion/eliminar-afiliacion.component';
import { AceptarSolicitudComponent } from './solicitudes/aceptar-solicitud/aceptar-solicitud.component';
import { RechazarSolicitudComponent } from './solicitudes/rechazar-solicitud/rechazar-solicitud.component';


const routes: Routes = [
  {
    path: 'crear-afiliacion',
    component: CrearAfiliacionComponent
  },
  {
    path: 'editar-afiliacion/:id',
    component: EditarAfiliacionComponent
  },
  {
    path:'buscar-afiliacion',
    component: BuscarAfiliacionComponent
  },
  {
    path:'eliminar-afiliacion/:id',
    component: EliminarAfiliacionComponent
  },
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
