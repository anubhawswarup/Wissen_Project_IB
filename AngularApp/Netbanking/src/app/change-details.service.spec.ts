import { TestBed, inject } from '@angular/core/testing';

import { ChangeDetailsService } from './change-details.service';

describe('ChangeDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeDetailsService]
    });
  });

  it('should be created', inject([ChangeDetailsService], (service: ChangeDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
