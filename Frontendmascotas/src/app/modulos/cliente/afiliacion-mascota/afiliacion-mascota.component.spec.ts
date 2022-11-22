import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliacionMascotaComponent } from './afiliacion-mascota.component';

describe('AfiliacionMascotaComponent', () => {
  let component: AfiliacionMascotaComponent;
  let fixture: ComponentFixture<AfiliacionMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfiliacionMascotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfiliacionMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
