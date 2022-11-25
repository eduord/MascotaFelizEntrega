import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';

const routes: Routes = [
  {
    path:"identificacion",
    component: IdentificacionComponent
  },
  {
    path:"cerrar-sesion",
    component: CerrarSesionComponent
  },
  {
    path:"recuperar-clave",
    component: RecuperarClaveComponent
  },
  {
    path:"cambiar-clave",
    component: CambiarClaveComponent

  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
