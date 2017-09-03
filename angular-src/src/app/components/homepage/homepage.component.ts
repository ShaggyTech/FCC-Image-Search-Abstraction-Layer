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
  page: number = 1
  nsfwCheckBoxValue: boolean = true
  albumsCheckBoxValue: boolean = true
  filterOptions: object = {nsfw: this.nsfwCheckBoxValue, albums: this.albumsCheckBoxValue} 

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  getSearchResults(searchString, nsfwCheckBoxValue, albumsCheckBoxValue){
    const searchOptions = {
      searchString: this.searchString
    }

    this.searchService.searchImgur(searchOptions).subscribe(data => {
      console.log(data)
      this.searchResults = data.result
    })
  }
}
