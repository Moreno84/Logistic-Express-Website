import { TestBed } from '@angular/core/testing';

import { FormGetInTouchService } from './form-get-in-touch.service';

describe('FormGetInTouchService', () => {
  let service: FormGetInTouchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormGetInTouchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
