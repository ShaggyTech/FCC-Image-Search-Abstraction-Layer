import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import {SearchService} from '../../services/search.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history:Array<string>

  constructor(private searchService:SearchService, private router:Router) { }

  ngOnInit () {
    this.searchService.callBackEnd({}).subscribe(data => {
      this.history = data.history
    })
  }
}
