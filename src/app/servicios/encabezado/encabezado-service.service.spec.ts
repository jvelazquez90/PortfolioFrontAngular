import { TestBed } from '@angular/core/testing';

import { EncabezadoServiceService } from './encabezado-service.service';

describe('EncabezadoServiceService', () => {
  let service: EncabezadoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncabezadoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
