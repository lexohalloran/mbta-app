import { Component, OnInit } from '@angular/core';
import { Datum } from '../object-model';
import { StopService } from '../stop.service';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css']
})
export class StopsComponent implements OnInit {

  lineId: string;
  invalidEntry: boolean = false;
  stops: Datum[];

  constructor(private stopService: StopService) { }

  ngOnInit(): void {
  }

  /**
   * Called when 'Submit' button is clicked. Validates that input is 
   * nonempty and populates stops list.
   */
  onSubmit(): void {
    if (this.lineId) {
      this.invalidEntry = false;
      // remove whitespace so the user can input things like 'Red, Orange' without error
      let searchString = this.lineId.replace(/\s/g, "");
      this.getStops(searchString);
      this.lineId = '';
    }
  }

  /**
   * Retrieves the list of stops from the Stop Service and 
   * saves them to this.stops.
   * @param searchString String to append to stops url to filter results by line.
   */
  getStops(searchString: string): void {
    this.stopService.getStops(searchString).subscribe(result => {
        this.stops = result.data;
        if (result.data.length < 1) this.invalidEntry = true;
    });
  }

}
