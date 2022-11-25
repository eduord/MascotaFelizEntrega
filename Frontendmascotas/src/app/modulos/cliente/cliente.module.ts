import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarPedidoComponent } from './pedidos/buscar-pedido/buscar-pedido.component';
import { CrearPedidoComponent } from './pedidos/crear-pedido/crear-pedido.component';
import { EliminarPedidoComponent } from './pedidos/eliminar-pedido/eliminar-pedido.component';
import { EditarPedidoComponent } from './pedidos/editar-pedido/editar-pedido.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { CrearSolicitudComponent } from './solicitud-afiliacion/crear-solicitud/crear-solicitud.component';
import { CrearRegistroComponent } from './registro/crear-registro/crear-registro.component';


@NgModule({
  declarations: [
    BuscarPedidoComponent,
    CrearPedidoComponent,
    EliminarPedidoComponent,
    EditarPedidoComponent,
    CrearSolicitudComponent,
    CrearRegistroComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
