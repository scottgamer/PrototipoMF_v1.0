import { Component, OnInit, Output, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  fullName: string;
  email: string;
  password: string;
  birthdayDate: string;
  genre: string;
  nationality: string;
  bio: string;

  modalRef: BsModalRef;

  apps: Application[];
  questions: Question[];
  responses: Response[];

  lorem: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
    ' Eius temporibus veniam sed autem dolorem eligendi' +
    'iure quo repellendus itaque adipisci voluptatibus odio quod,' +
    ' repellat corrupti quae perspiciatis accusamus.';

  constructor(private modalService: BsModalService) {
    this.apps = [];

    this.questions = [
      {
        body: this.lorem,
        date: 'dd/mm/aaaa',
        responseCount: 2,
        responses: [
          {
            responseId: 1,
            responseBody: this.lorem,
            date: 'dd/mm/aaaa'
          },
          {
            responseId: 2,
            responseBody: this.lorem,
            date: 'dd/mm/aaaa'
          }
        ]


      }
    ];

    /* this.apps = [
      {
        name: 'app1',
        category: 'Categoria 1',
        starList: [true, true, true, true, true],
        rating: 0
      },
      {
        name: 'app2',
        category: 'Categoria 1',
        starList: [true, true, true, true, true],
        rating: 0
      }
    ]; */

    for (var i = 1; i < 4; i++) {
      this.apps.push({
        name: 'Aplicación ' + i,
        img: 'app' + i + '.webp',
        category: 'Categoria 1',
        starList: [true, true, true, true, true],
        rating: 0
      });
    }

  }

  ngOnInit() {
    this.fullName = 'Richard Munoz';
    this.email = 'richosojason@msn.com';
    this.password = '**********';
    this.birthdayDate = '26/03/1993';
    this.genre = 'Masculino';
    this.nationality = 'Ecuatoriano';
  }

  editInfo(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    // this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    console.log('abre modal');
  }

}


interface Application {
  name: string,
  img: string,
  category: string,
  starList: boolean[],
  rating: number
}

interface Question {
  body: string,
  date: string,
  responseCount: number,
  responses: Response[]
}

interface Response {
  responseId: number,
  responseBody: string,
  date: string
}

/* interface Application {
  name: string,
  img:string,
  category: string,
  starList: boolean[],
  rating: number,
  country: string,
  developedBy: string,
  version: number,
  releaseDate: string,
  platform: string,
  androidMin: string,
  appWebPage: string
} */