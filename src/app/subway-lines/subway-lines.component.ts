import { Component, OnInit } from '@angular/core';
import { LineService } from '../line.service';
import { Resource } from '../object-model/resource';
import { Datum } from '../object-model/datum';

@Component({
  selector: 'app-subway-lines',
  templateUrl: './subway-lines.component.html',
  styleUrls: ['./subway-lines.component.css']
})
export class SubwayLinesComponent implements OnInit {

  isVisible: boolean;
  lines: Datum[];
  strings: string[];
  jsonObject: Resource;

  constructor(private lineService: LineService) { }

  ngOnInit(): void {
    this.isVisible = false;
    
    this.lineService.getLines().subscribe(result => {
      this.lines = result.data.filter(
        route => route.attributes.type == 0 || route.attributes.type == 1);
      this.strings = this.lines.map(route => JSON.stringify(route));
    });
  }

  toggleVisible(): void {
    this.isVisible = !this.isVisible;
  }

}
