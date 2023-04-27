import { TestBed } from '@angular/core/testing';

import { QueserviceService } from './queservice.service';

describe('QueserviceService', () => {
  let service: QueserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
