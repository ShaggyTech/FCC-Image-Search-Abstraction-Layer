import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class GetHistoryService {
  history:object

  constructor(private http:Http) { }

  getHistory = () => {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.get('http://localhost:3000/api/imgsearch', {headers: headers})
      .map(res => res.json())
  }

}
