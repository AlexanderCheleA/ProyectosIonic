import { TestBed } from '@angular/core/testing';

import { CategoriacursoService } from './categoriacurso.service';

describe('CategoriacursoService', () => {
  let service: CategoriacursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriacursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
