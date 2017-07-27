import { TestBed, inject } from '@angular/core/testing';

import { GetDetailsService } from './get-details.service';

describe('GetDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDetailsService]
    });
  });

  it('should be created', inject([GetDetailsService], (service: GetDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
