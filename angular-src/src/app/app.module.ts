import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HistoryComponent } from './components/history/history.component';
import { SearchComponent } from './components/search/search.component';
import { ApiComponent } from './components/api/api.component';

import {GetHistoryService} from './services/get-history.service';
import {SearchService} from './services/search.service';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'search', component: SearchComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'api', component: ApiComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    HistoryComponent,
    SearchComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetHistoryService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
