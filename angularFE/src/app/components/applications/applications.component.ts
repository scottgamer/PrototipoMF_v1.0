import { Component, OnInit } from '@angular/core';

import { ApplicationMin } from '../../models/application-model-min'; 

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  applications:ApplicationMin[];

  constructor() { }

  ngOnInit() {
  }

}
