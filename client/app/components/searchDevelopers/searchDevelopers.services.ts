import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchDevelopersServices {
  constructor (private http: Http) {}

  getAllProfiles(filter) {
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
   const url = 'http://174.138.71.230:1337/api/profile/getAll'
   return this.http.post(url, JSON.stringify(filter), options)
    .map(res => res.json())
  }

}