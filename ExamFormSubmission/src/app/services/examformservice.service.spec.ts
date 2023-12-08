import { TestBed } from '@angular/core/testing';

import { ExamformserviceService } from './examformservice.service';
import { Observable } from 'rxjs';

describe('ExamformserviceService', () => {
  let service: ExamformserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamformserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
