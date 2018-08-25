import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  headerTitle: string;
  body: string;

  constructor() {
    this.headerTitle = 'Noticia 1';
    this.body = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aperiam voluptatem, distinctio assumenda rerum';
  }

  ngOnInit() {
  }

}
