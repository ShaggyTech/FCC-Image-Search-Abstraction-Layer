import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import {GetHistoryService} from '../../services/get-history.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history:Array<string>

  constructor(private gethistoryService:GetHistoryService, private router:Router) { }

  ngOnInit () {
    this.gethistoryService.getHistory().subscribe(history => {
      this.history = history.history
    })
  }

}
