import { Component, OnInit, TemplateRef, Input } from '@angular/core';

//modules
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BarRatingModule } from "ngx-bar-rating";

//dynamic routing using ids in url
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

//services
import { ApplicationService } from '../../services/application.service';

//classes
import { Application } from '../../models/application-model';
import { Question } from '../../models/questions-model';

@Component({
  selector: 'app-application',
  providers: [ApplicationService],
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  @Input() application: Application; 

  //using application-model
  // application: Application;
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

  constructor(private modalService: BsModalService,
              private barRatingModule: BarRatingModule,
              private route: ActivatedRoute,
              private applicationService: ApplicationService,
              private location: Location) {
    
  }

  ngOnInit() {
    this.messageBtn = 'Leer más';
    this.getApplication();
    this.getHalfString();
    this.loadQuestions();
  }

  //get application by id
  getApplication(): void {
    // static image of the route information
    const id = +this.route.snapshot.paramMap.get('id');
    this.applicationService.getApplication(id)
      .subscribe(application => this.application = application);
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
