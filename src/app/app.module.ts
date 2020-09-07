import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubwayLinesComponent } from './subway-lines/subway-lines.component';
import { StopsComponent } from './stops/stops.component';

@NgModule({
  declarations: [
    AppComponent,
    SubwayLinesComponent,
    StopsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
