import { Component, OnInit } from '@angular/core'
import {SearchService} from '../../services/search.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
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
