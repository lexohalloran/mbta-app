import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MTBA_BASE_URL, ROUTES_URL } from './api-config';
import { Resource } from './object-model';

@Injectable({
  providedIn: 'root'
})
export class LineService {

  url: string = MTBA_BASE_URL + ROUTES_URL;

  constructor(private http: HttpClient) { }

  /**
   * Retrieves list of subway lines via an http GET call to 
   * the external MBTA API.
   */
  getLines(): Observable<Resource> {
    return this.http.get<Resource>(this.url);
  }
}
