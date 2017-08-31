import { TestBed, inject } from '@angular/core/testing';

import { GetHistoryService } from './get-history.service';

describe('GetHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetHistoryService]
    });
  });

  it('should be created', inject([GetHistoryService], (service: GetHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
