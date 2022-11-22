import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAfiliacionComponent } from './buscar-afiliacion.component';

describe('BuscarAfiliacionComponent', () => {
  let component: BuscarAfiliacionComponent;
  let fixture: ComponentFixture<BuscarAfiliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarAfiliacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarAfiliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
