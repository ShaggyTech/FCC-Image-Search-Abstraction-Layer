import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  searchOptions:Object

  constructor(private http:Http) { }

  searchImgur = (searchOptions) => {
    const url = `http://localhost:3000/api/imgsearch/${searchOptions.searchString}`
    console.log(url)
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.get(`http://localhost:3000/api/imgsearch/${searchOptions.searchString}`, {headers: headers})
      .map(res => res.json())
  }
}
