import { TestBed } from '@angular/core/testing';
import { ApiRegiones } from './api-regiones.service';

describe('ApiRegiones', () => {
  let service: ApiRegiones;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRegiones);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});