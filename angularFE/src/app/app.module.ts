import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
