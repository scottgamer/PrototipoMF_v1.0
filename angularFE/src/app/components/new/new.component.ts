import { Component, OnInit } from '@angular/core';

import { New } from '../../models/new-model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  news: New;

  constructor() { }

  ngOnInit() {
    this.loadNews();
  }

  loadNews(): void {
    this.news = {
      title: 'El joven invidente que narra los partidos del Málaga desde la grada',
      body: 'El fútbol tiene mucho de ritual. La multitud coreando el nombre de su '+
      'equipo, las banderas ondeando en las gradas, la locura desatada con cada gol '+
      'o la desesperación cuando se falla una ocasión. Durante 90 minutos los aficionados'+
      ' viven sumidos en una montaña rusa: expectación cuando el balón ronda el área rival, '+
      'nervios cuando se acerca a la propia. Ese ambiente es el que cautivó a Juan Antonio Zamora, '+
      'un invidente de 25 años. El joven nunca ha visto el escudo de su club ni conoce los colores del '+
      'Málaga, pero no se pierde ninguno de sus partidos. “No hace falta ver el fútbol. Hay que ponerle pasión '+
      'y sentimiento. Vivir el ambiente”, señala.',
      imgs: ['assets/images/news/new1/new1-1.jpg',]
    };
  }

}
