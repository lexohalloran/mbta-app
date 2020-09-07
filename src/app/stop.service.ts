import { Injectable } from '@angular/core';
import { MTBA_BASE_URL, STOPS_URL } from './api-config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource } from './object-model/resource';

@Injectable({
  providedIn: 'root'
})
export class StopService {

  url: string = MTBA_BASE_URL + STOPS_URL;

  constructor(private http: HttpClient) { }

  getStops(lineID: string): Observable<Resource> {
    return this.http.get<Resource>(this.url + lineID);
  }
}
