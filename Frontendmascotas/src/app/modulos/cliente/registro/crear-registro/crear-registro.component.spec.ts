import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRegistroComponent } from './crear-registro.component';

describe('CrearRegistroComponent', () => {
  let component: CrearRegistroComponent;
  let fixture: ComponentFixture<CrearRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
