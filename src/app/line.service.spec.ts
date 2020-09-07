import { TestBed } from '@angular/core/testing';

import { LineService } from './line.service';
import { HttpClient } from '@angular/common/http';

describe('LineService', () => {
  let service: LineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ { provide: HttpClient, useValue: null } ]
    });
    service = TestBed.inject(LineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
