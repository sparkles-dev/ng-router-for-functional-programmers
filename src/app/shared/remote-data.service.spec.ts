import { TestBed, inject } from '@angular/core/testing';

import { RemoteDataService } from './remote-data.service';

describe('RemoteDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoteDataService]
    });
  });

  it('should ...', inject([RemoteDataService], (service: RemoteDataService) => {
    expect(service).toBeTruthy();
  }));
});
