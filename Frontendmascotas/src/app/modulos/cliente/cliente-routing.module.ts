import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPedidoComponent } from './pedidos/buscar-pedido/buscar-pedido.component';
import { CrearPedidoComponent } from './pedidos/crear-pedido/crear-pedido.component';
import { EditarPedidoComponent } from './pedidos/editar-pedido/editar-pedido.component';
import { EliminarPedidoComponent } from './pedidos/eliminar-pedido/eliminar-pedido.component';
import { CrearRegistroComponent } from './registro/crear-registro/crear-registro.component';

const routes: Routes = [

  {
    path: 'crear-pedido',
    component: CrearPedidoComponent
  },
  {
    path: 'editar-pedido/:id',
    component: EditarPedidoComponent
  },
  {
    path:'buscar-pedido',
    component: BuscarPedidoComponent
  },
  {
    path:'eliminar-pedido/:id',
    component: EliminarPedidoComponent
  },
  {
    path:'crear-registro',
    component: CrearRegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
