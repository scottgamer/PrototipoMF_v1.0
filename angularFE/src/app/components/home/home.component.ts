import { Component, OnInit } from '@angular/core';

import { BarRatingModule } from "ngx-bar-rating";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = "Aplicacion";
  category = "Baja visión"
  /* starList: boolean[] = [true, true, true, true, true];
  rating: number; */

  // rate:number=3;

  applications: Application[];

  public constructor(private barRatingModule: BarRatingModule) {

    this.applications = [];

    /* this.applications = [{
      name: 'Aplicación ',
      img: 'assets/images/logos/app1.webp',
      category: 'Baja visión',
      rating: 3
    }]; */

  }

  ngOnInit() {
    this.loadApplications();
  }

  loadApplications() {

    for (let i = 1; i < 4; i++) {
      this.applications.push(
        {
          name: 'Aplicación ' + i,
          img:'assets/images/logos/app' + i + '.webp',
          category: 'Categoría ' + i ,
          rating: (Math.random()*5) + 1
        }
      );
    }
  }

  /* setStar(data: any) {
    this.rating = data + 1;
    for (var i = 0; i <= 4; i++) {
      if (i <= data) {
        this.starList[i] = false;
      }
      else {
        this.starList[i] = true;
      }
    }
  } */



}

interface Application {
  name: string,
  img: string,
  category: string,
  rating: number
}
