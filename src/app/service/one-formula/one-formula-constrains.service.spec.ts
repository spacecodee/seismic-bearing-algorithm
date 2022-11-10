import { TestBed } from '@angular/core/testing';

import { OneFormulaConstrainsService } from './one-formula-constrains.service';

describe('OneFormulaConstrainsService', () => {
  let service: OneFormulaConstrainsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneFormulaConstrainsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
