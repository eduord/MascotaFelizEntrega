import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAfiliacionComponent } from './crear-afiliacion.component';

describe('CrearAfiliacionComponent', () => {
  let component: CrearAfiliacionComponent;
  let fixture: ComponentFixture<CrearAfiliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAfiliacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAfiliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
