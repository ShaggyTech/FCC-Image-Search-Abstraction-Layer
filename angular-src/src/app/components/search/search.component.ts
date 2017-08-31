import { Component, OnInit } from '@angular/core'
import {SearchService} from '../../services/search.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchString: String
  searchResults:Array<Object>

  constructor(private searchService: SearchService) { }
  
  ngOnInit() {
  }

  onSearchSubmit(){
    const searchOptions = {
      searchString: this.searchString
    }

    this.searchService.searchImgur(searchOptions).subscribe(data => {
      this.searchResults = data.result
      console.log(this.searchResults)
    })
  }

}
