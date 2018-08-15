import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Discapacidad Visual';
  name = "Aplicacion";
  category = "Baja visión"
  starList: boolean[] = [true, true, true, true, true];
  rating: number;

  public constructor(private titleService: Title ) { }
 
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
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

  ngOnInit(){
    this.setTitle('Catalogo de Aplicaciones para Discapacidad Visual');
  }
}
