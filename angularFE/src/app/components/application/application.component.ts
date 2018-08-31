import { Component, OnInit, TemplateRef, Input } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { BarRatingModule } from "ngx-bar-rating";

import { Application } from '../../models/application-model';
import { Question } from '../../models/questions-model';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  
  @Input() application: Application; 

  //using application-model
  //application: Application;
  questions: Question[];

  half1: string;
  half2: string;
  lorem: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci quod nemo ' +
    'vitae cumque sit, iusto porro! Eligendi nesciunt et amet numquam dolore voluptatem a ' +
    'maiores deleniti. Ex, cum ipsam.';

  isCollapsed = false;
  messageBtn: string;

  modalRef: BsModalRef;
  message: string;

  constructor(private modalService: BsModalService, private barRatingModule: BarRatingModule) {
    //this.loadApplicationData();
    //this.application;
  }

  ngOnInit() {
    this.messageBtn = 'Leer más';
    //this.getHalfString();
    this.loadQuestions();
  }

  loadApplicationData(): void {
    this.application = {
      name: 'Aplicacion demo',
      logo:'assets/images/logos/app1.webp',
      imgs: ['assets/images/carousel/ca1.webp', 'assets/images/carousel/ca2.webp', 'assets/images/carousel/ca3.webp'],
      category: 'Baja visión',
      description: 'Eye-D (Acronym for Eye Devices), conceptualized as standalone solution to improve quality of life' +
        ' of visually impaired (VI) is a complete solution that assists VI’s in their daily life.' +
        'Eye-D helps visually impaired be location aware, explore and navigate to nearby places of interest, ' +
        'evaluate surroundings with their smartphone camera and read printed text. Eye-D will serve as the true ' +
        'companion for most of your daily assistance needs.' +
        'Trusted and supported by thousands of people across the globe Eye-D is determined to make visually ' +
        'impaired truly independent in all aspect and help them contribute to the society by propelling inclusion.' +
        'What’s under the hood and how it helps?',
      rating: 3,
      country: 'España',
      developedBy: 'Desarrollador',
      version: 1.1,
      releaseDate: 'dd/mm/aaaa',
      platform: 'Móvil',
      androidMin: 'Android 4.0 kitkat',
      appWebPage: 'www.web-aplicacion.com',
      commentaries: [{
        user: 'Usuario123',
        commentary: this.lorem,
        date: '8/30/2018',
        rating: 2,
      },
      {
        user: 'Usuario567',
        commentary: this.lorem,
        date: '10/30/2018',
        rating: 5,
      }],
    };
  }

  loadQuestions(): void {
    this.questions = [{
      id: 1,
      question: this.lorem,
      date: '10/30/2018',
      responses: [
        {
          id: 1,
          response: this.lorem,
          date: '10/30/2018',
        }, {
          id: 2,
          response: this.lorem,
          date: '10/30/2018',
        },
      ]
    }];
  }

  getHalfString(): void {
    let descript = this.application.description;
    let size = descript.length / 2;
    this.half1 = descript.substr(0, size);
    this.half2 = descript.substr(size + 1);
  }

  collapsed(): void {
    this.messageBtn = 'Leer menos';
  }

  expanded(): void {
    this.messageBtn = 'Leer más';
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(template: TemplateRef<any>): void {
    //this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  confirmModal(): void {
    //this.message = 'Confirmed!';
    alert('Pregunta guardada!');
    this.modalRef.hide();
  }
}
