import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  searchOptions: Object
  isDev: boolean

  constructor(private http:Http) {
    this.isDev = true; // Change to false before deployment
  }

  callBackEnd = (searchOptions) => {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    let ep = this.prepEndpoint('api/imgsearch/');
    if (searchOptions.searchString) {
      return this.http.get(`${ep}${searchOptions.searchString}`, {headers: headers})
      .map(res => res.json())
    }
    else {
      return this.http.get(ep, {headers: headers})
      .map(res => res.json())
    }
  }
  
  prepEndpoint(ep){
    if(this.isDev){
      return 'http://localhost:3000/'+ep;
    } else {
      return ep;
    }
  }
}
