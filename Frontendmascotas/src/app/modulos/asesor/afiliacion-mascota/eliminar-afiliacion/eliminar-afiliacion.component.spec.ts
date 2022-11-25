import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAfiliacionComponent } from './eliminar-afiliacion.component';

describe('EliminarAfiliacionComponent', () => {
  let component: EliminarAfiliacionComponent;
  let fixture: ComponentFixture<EliminarAfiliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAfiliacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAfiliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
