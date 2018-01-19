import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Nasa } from './nasa';

@Injectable()
export class NasaService {

  private nasaKey = 'LcGRMR8ReXp7B91eLkhqcSag0JYHQKh2Y5MAAXHY';
  private domain = 'https://api.nasa.gov/planetary/';
  private args = 'apod?api_key=';

  constructor(private http: HttpClient) { }

  private getUrl(date='') {
    if(date){
      date = `&date=${date}`;
    }
    return `${this.domain}${this.args}${this.nasaKey}${date}`;
  }

  getApod(): Observable<Nasa> {
    return this.http.get<Nasa>(this.getUrl());
  }

}
