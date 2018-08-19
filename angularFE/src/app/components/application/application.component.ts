import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  name = "Aplicacion";
  category = "Baja visión"
  starList: boolean[] = [true, true, true, true, true];
  rating: number;

  isCollapsed = false;
  messageBtn: string;

  country:string='España';
  developedBy:string='Empresa';
  version:number=1.0;
  releaseDate:string='dd/mm/aaaa';
  platform:string='móvil';
  androidMin:string='4.0 kitkat';
  appWebPage:string='www.app-web.com';


  constructor() { }

  ngOnInit() {
    this.messageBtn= 'Leer más';
  }

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

  collapsed(): void {
    this.messageBtn = 'Leer menos';
  }
 
  expanded(): void {
    this.messageBtn = 'Leer más';
  }
}
