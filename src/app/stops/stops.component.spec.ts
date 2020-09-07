import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopsComponent } from './stops.component';
import { Resource } from '../object-model';
import { of } from 'rxjs';
import { StopService } from '../stop.service';

describe('StopsComponent', () => {
  let component: StopsComponent;
  let fixture: ComponentFixture<StopsComponent>;
  let getStopsSpy: any;
  let testResource: Resource = {
    data: [
      {
        type: '1',
        id: 'place-doesntexist',
        attributes: {
          type: 1,
          long_name: 'Fake Stop',
          name: '',
          direction_names: [],
          direction_destinations: [],
          sort_order: 0,
          description: '',
          color: ''
        }
      }
    ]
  }

  beforeEach(async () => {
    const stopServiceSpy = jasmine.createSpyObj('StopService', ['getStops']);
    getStopsSpy = stopServiceSpy.getStops.and.returnValue(of(testResource));
    await TestBed.configureTestingModule({
      declarations: [ StopsComponent ],
      providers: [ { provide: StopService, useValue: stopServiceSpy } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
