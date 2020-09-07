import { Component, OnInit } from '@angular/core';
import { Datum } from '../object-model/datum';
import { StopService } from '../stop.service';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css']
})
export class StopsComponent implements OnInit {

  lineId: string;
  clicked: boolean = false;
  invalidEntry: boolean = false;
  stops: Datum[];

  constructor(private stopService: StopService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.clicked = true;
    if (this.lineId) {
      this.invalidEntry = false;
      this.getStops(this.lineId);
    }
    this.lineId = '';
  }

  getStops(lineId: string): void {
    this.stopService.getStops(lineId).subscribe(result => {
        this.stops = result.data;
        if (result.data.length < 1) this.invalidEntry = true;
    });
  }

}
