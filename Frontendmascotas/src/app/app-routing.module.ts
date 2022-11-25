import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/inicio"
  },
  {
    path:"seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path:"productos",
    loadChildren: () => import("./modulos/productos/productos.module").then(x => x.ProductosModule)
  },
  {
    path:"asesor",
    loadChildren: () => import("./modulos/asesor/asesor.module").then(x => x.AsesorModule)
  },
  {
    path:"planes",
    loadChildren: () => import("./modulos/planes/planes.module").then(x => x.PlanesModule)
  },
  {
    path:"**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
