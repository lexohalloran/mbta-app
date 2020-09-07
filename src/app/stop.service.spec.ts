import { TestBed } from '@angular/core/testing';

import { StopService } from './stop.service';
import { HttpClient } from '@angular/common/http';

describe('StopService', () => {
  let service: StopService;

  beforeEach(() => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [ { provide: HttpClient, useValue: null } ]
    });
    service = TestBed.inject(StopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
