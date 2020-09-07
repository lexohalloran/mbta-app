import { Component, OnInit } from '@angular/core';
import { LineService } from '../line.service';
import { Resource, Datum } from '../object-model';

@Component({
  selector: 'app-subway-lines',
  templateUrl: './subway-lines.component.html',
  styleUrls: ['./subway-lines.component.css']
})
export class SubwayLinesComponent implements OnInit {

  isVisible: boolean = false;
  areLinesFetched: boolean = false;
  lines: Datum[];
  strings: string[];
  jsonObject: Resource;

  constructor(private lineService: LineService) { }

  ngOnInit(): void {
  }

  /**
   * Toggles visibility of subway-lines component, and retrieves 
   * list of subway lines if they have not already been retrieved.
   */
  onClick(): void {
    this.isVisible = !this.isVisible;

    if (!this.areLinesFetched) {
      this.lineService.getLines().subscribe(result => {
        this.lines = result.data.filter(
          // Filter for 'light rail' and 'heavy rail' lines (not e.g. buses)
          route => route.attributes.type == 0 || route.attributes.type == 1);
          this.strings = this.lines.map(route => JSON.stringify(route));
          this.areLinesFetched = true;
      });
    }
  }

}
