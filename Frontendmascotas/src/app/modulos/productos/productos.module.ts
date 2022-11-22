import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { RealizarCompraComponent } from './realizar-compra/realizar-compra.component';
import { EditarPedidoComponent } from './realizar-compra/editar-pedido/editar-pedido.component';
import { CrearPedidoComponent } from './realizar-compra/crear-pedido/crear-pedido.component';
import { BuscarPedidoComponent } from './realizar-compra/buscar-pedido/buscar-pedido.component';
import { EliminarPedidoComponent } from './realizar-compra/eliminar-pedido/eliminar-pedido.component';


@NgModule({
  declarations: [
    RealizarCompraComponent,
    EditarPedidoComponent,
    CrearPedidoComponent,
    BuscarPedidoComponent,
    EliminarPedidoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
