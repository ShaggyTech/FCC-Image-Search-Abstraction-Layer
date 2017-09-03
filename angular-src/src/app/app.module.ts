import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HistoryComponent } from './components/history/history.component';
import { ApiComponent } from './components/api/api.component';

import {SearchService} from './services/search.service';

import {SearchFilter} from './pipes/search-filter.pipe';

import {FlashMessagesModule} from 'angular2-flash-messages';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'api', component: ApiComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    HistoryComponent,
    ApiComponent,
    SearchFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    FlashMessagesModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
