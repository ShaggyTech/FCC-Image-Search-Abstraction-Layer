import { Component, OnInit } from '@angular/core'
import {FlashMessagesService} from 'angular2-flash-messages'
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
  albumCheckBoxValue: boolean = true
  searchOptions: object

  constructor(private searchService: SearchService, private flashMessage:FlashMessagesService) { }

  ngOnInit() {
    this.searchOptions = {searchString: ''}
  }

  getSearchResults(searchString){
    // Make sure we aren't making needless calls with the same search words
    if (this.searchOptions[`searchString`] === this.searchString) return false

    this.searchOptions = {
      searchString: this.searchString
    }

    if (this.searchString !== undefined) {
      this.searchService.callBackEnd(this.searchOptions).subscribe(data => {
        if (!data.result) {
          this.flashMessage.show('No search results found for ' + this.searchString, {cssClass: 'alert-danger', timeout: 3000});
        }
        this.searchResults = data.result
      })
    }
  }
}
