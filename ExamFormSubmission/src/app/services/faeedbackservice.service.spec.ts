import { TestBed } from '@angular/core/testing';

import { FaeedbackserviceService } from './faeedbackservice.service';

describe('FaeedbackserviceService', () => {
  let service: FaeedbackserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaeedbackserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
