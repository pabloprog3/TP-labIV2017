import { TestBed, inject } from '@angular/core/testing';

import { VerificarJwtService } from './verificar-jwt.service';

describe('VerificarJwtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerificarJwtService]
    });
  });

  it('should ...', inject([VerificarJwtService], (service: VerificarJwtService) => {
    expect(service).toBeTruthy();
  }));
});
