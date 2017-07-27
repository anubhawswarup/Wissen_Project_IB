import { TestBed, inject } from '@angular/core/testing';

import { UpdateuserService } from './updateuser.service';

describe('UpdateuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateuserService]
    });
  });

  it('should be created', inject([UpdateuserService], (service: UpdateuserService) => {
    expect(service).toBeTruthy();
  }));
});
