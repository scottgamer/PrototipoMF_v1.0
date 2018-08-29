import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
//Bootstrap components using ngx-bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { BarRatingModule } from "ngx-bar-rating";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { NewsComponent } from './components/news/news.component';
import { EventsComponent } from './components/events/events.component';
import { ApplicationComponent } from './components/application/application.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { NewComponent } from './components/new/new.component';
import { EventComponent } from './components/event/event.component';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'applications', component:ApplicationsComponent},
  {path:'news', component:NewsComponent},
  {path:'new', component:NewComponent},
  {path:'events', component:EventsComponent},
  {path:'event', component:EventComponent},
  {path:'application', component:ApplicationComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'user', component:UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ApplicationsComponent,
    HomeComponent,
    NewsComponent,
    EventsComponent,
    ApplicationComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    NewComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    BarRatingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
