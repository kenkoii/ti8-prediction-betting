import { TestBed, inject } from '@angular/core/testing';

import { AngularService } from './angular.service';

describe('AngularService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularService]
    });
  });

  it('should be created', inject([AngularService], (service: AngularService) => {
    expect(service).toBeTruthy();
  }));
});
