import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPedidoComponent } from './buscar-pedido.component';

describe('BuscarPedidoComponent', () => {
  let component: BuscarPedidoComponent;
  let fixture: ComponentFixture<BuscarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
