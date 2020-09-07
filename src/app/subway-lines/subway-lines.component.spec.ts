import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubwayLinesComponent } from './subway-lines.component';
import { LineService } from '../line.service';
import { Resource } from '../object-model';
import { of } from 'rxjs';

describe('SubwayLinesComponent', () => {
  let component: SubwayLinesComponent;
  let fixture: ComponentFixture<SubwayLinesComponent>;
  let getLinesSpy: any;
  let testResource: Resource = {
    data: [
      {
        type: '1',
        id: 'Purple',
        attributes: {
          type: 1,
          long_name: 'Purple Line',
          name: '',
          direction_destinations: [],
          direction_names: [],
          sort_order: 0,
          description: '',
          color: ''
        }
      }
    ]
  }

  beforeEach(async () => {
    const lineServiceSpy = jasmine.createSpyObj('LineService', ['getLines']);
    getLinesSpy = lineServiceSpy.getLines.and.returnValue(of(testResource));
    await TestBed.configureTestingModule({
      declarations: [ SubwayLinesComponent ],
      providers: [ { provide: LineService, useValue: lineServiceSpy } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubwayLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
