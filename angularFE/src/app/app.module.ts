import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

//import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { NewsComponent } from './components/news/news.component';
import { EventsComponent } from './components/events/events.component';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'applications', component:ApplicationsComponent},
  {path:'news', component:NewsComponent},
  {path:'events', component:EventsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ApplicationsComponent,
    HomeComponent,
    NewsComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
