import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { AfiliacionMascotaComponent } from './afiliacion-mascota/afiliacion-mascota.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CrearAfiliacionComponent } from './afiliacion-mascota/crear-afiliacion/crear-afiliacion.component';
import { EditarAfiliacionComponent } from './afiliacion-mascota/editar-afiliacion/editar-afiliacion.component';
import { EliminarAfiliacionComponent } from './afiliacion-mascota/eliminar-afiliacion/eliminar-afiliacion.component';
import { BuscarAfiliacionComponent } from './afiliacion-mascota/buscar-afiliacion/buscar-afiliacion.component';
import { BuscarPedidoComponent } from './pedidos/buscar-pedido/buscar-pedido.component';
import { CrearPedidoComponent } from './pedidos/crear-pedido/crear-pedido.component';
import { EditarPedidoComponent } from './pedidos/editar-pedido/editar-pedido.component';
import { EliminarPedidoComponent } from './pedidos/eliminar-pedido/eliminar-pedido.component';
import { CrearRegistroComponent } from './registro/crear-registro/crear-registro.component';


@NgModule({
  declarations: [
    RegistroComponent,
    AfiliacionMascotaComponent,
    PedidosComponent,
    CrearAfiliacionComponent,
    EditarAfiliacionComponent,
    EliminarAfiliacionComponent,
    BuscarAfiliacionComponent,
    BuscarPedidoComponent,
    CrearPedidoComponent,
    EditarPedidoComponent,
    EliminarPedidoComponent,
    CrearRegistroComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
