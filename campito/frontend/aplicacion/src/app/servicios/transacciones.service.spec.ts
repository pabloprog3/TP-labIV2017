import { TestBed, inject } from '@angular/core/testing';

import { TransaccionesService } from './transacciones.service';

describe('TransaccionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransaccionesService]
    });
  });

  it('should ...', inject([TransaccionesService], (service: TransaccionesService) => {
    expect(service).toBeTruthy();
  }));
});
