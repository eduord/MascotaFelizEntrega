import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarComponent } from './consultar/consultar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';


const routes: Routes = [ {
  path: 'consultar',
  component: ConsultarComponent,
}, {
  path: 'agregar',
  component: AgregarComponent,
}, {
  path: 'editar/:id',
  component: EditarComponent,

}, {
  path: 'eliminar/:id',
  component: EliminarComponent,
}, {
  path: '**',
  component: ConsultarComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanesRoutingModule { }
