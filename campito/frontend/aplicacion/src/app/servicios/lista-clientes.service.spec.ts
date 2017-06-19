import { TestBed, inject } from '@angular/core/testing';

import { ListaClientesService } from './lista-clientes.service';

describe('ListaClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaClientesService]
    });
  });

  it('should ...', inject([ListaClientesService], (service: ListaClientesService) => {
    expect(service).toBeTruthy();
  }));
});
