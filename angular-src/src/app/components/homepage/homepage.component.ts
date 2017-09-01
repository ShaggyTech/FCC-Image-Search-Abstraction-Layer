import { Component, OnInit } from '@angular/core'
import {SearchService} from '../../services/search.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  searchString: String
  searchResults:Array<Object>

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  getSearchResults(searchString){
    const searchOptions = {
      searchString: this.searchString
    }

    this.searchService.searchImgur(searchOptions).subscribe(data => {
      this.searchResults = data.result
      console.log(this.searchResults)
    })
  }
}
