import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAfiliacionComponent } from './editar-afiliacion.component';

describe('EditarAfiliacionComponent', () => {
  let component: EditarAfiliacionComponent;
  let fixture: ComponentFixture<EditarAfiliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAfiliacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAfiliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
