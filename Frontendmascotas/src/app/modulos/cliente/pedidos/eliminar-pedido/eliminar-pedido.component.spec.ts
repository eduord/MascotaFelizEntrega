import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPedidoComponent } from './eliminar-pedido.component';

describe('EliminarPedidoComponent', () => {
  let component: EliminarPedidoComponent;
  let fixture: ComponentFixture<EliminarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
