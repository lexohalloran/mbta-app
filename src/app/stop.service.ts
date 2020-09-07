import { Injectable } from '@angular/core';
import { MTBA_BASE_URL, STOPS_URL } from './api-config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource } from './object-model';

@Injectable({
  providedIn: 'root'
})
export class StopService {

  url: string = MTBA_BASE_URL + STOPS_URL;

  constructor(private http: HttpClient) { }

  /**
   * Retrieves list of stops on a particular line or lines via
   * an http GET call to the external MBTA API. 
   * @param filterString Term appended to the end of the url
   * to filter results by subway line.
   */
  getStops(filterString: string): Observable<Resource> {
    return this.http.get<Resource>(this.url + filterString);
  }
}
