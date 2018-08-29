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
  starList: boolean[] = [true, true, true, true, true];
  rating: number;

  rate:number=3;

  public constructor(private barRatingModule:BarRatingModule) { }

  setStar(data: any) {
    this.rating = data + 1;
    for (var i = 0; i <= 4; i++) {
      if (i <= data) {
        this.starList[i] = false;
      }
      else {
        this.starList[i] = true;
      }
    }
  }

  ngOnInit(){
  }

}
