import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPedidoComponent } from './realizar-compra/buscar-pedido/buscar-pedido.component';
import { CrearPedidoComponent } from './realizar-compra/crear-pedido/crear-pedido.component';
import { EditarPedidoComponent } from './realizar-compra/editar-pedido/editar-pedido.component';
import { EliminarPedidoComponent } from './realizar-compra/eliminar-pedido/eliminar-pedido.component';

const routes: Routes = [
  {
    path:'crearPedido',
    component: CrearPedidoComponent
  },
  {
    path:'editarPedido',
    component: EditarPedidoComponent
  },
  {
    path:'buscarPedido',
    component: BuscarPedidoComponent
  },
  {
    path:'eliminarPedido',
    component: EliminarPedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
