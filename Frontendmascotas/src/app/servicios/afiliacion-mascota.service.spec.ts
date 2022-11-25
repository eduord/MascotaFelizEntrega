import { TestBed } from '@angular/core/testing';

import { AfiliacionMascotaService } from './afiliacion-mascota.service';

describe('AfiliacionMascotaService', () => {
  let service: AfiliacionMascotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfiliacionMascotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
