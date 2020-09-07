import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MTBA_BASE_URL, ROUTES_URL } from './api-config';
import { Resource } from './object-model/resource';

@Injectable({
  providedIn: 'root'
})
export class LineService {

  url: string = MTBA_BASE_URL + ROUTES_URL;

  constructor(private http: HttpClient) { }

  getLines(): Observable<Resource> {
    return this.http.get<Resource>(this.url);
  }
}
