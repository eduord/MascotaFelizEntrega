import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechazarSolicitudComponent } from './rechazar-solicitud.component';

describe('RechazarSolicitudComponent', () => {
  let component: RechazarSolicitudComponent;
  let fixture: ComponentFixture<RechazarSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechazarSolicitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechazarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
