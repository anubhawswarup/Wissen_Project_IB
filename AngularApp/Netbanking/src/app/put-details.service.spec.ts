import { TestBed, inject } from '@angular/core/testing';

import { PutDetailsService } from './put-details.service';

describe('PutDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PutDetailsService]
    });
  });

  it('should be created', inject([PutDetailsService], (service: PutDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
