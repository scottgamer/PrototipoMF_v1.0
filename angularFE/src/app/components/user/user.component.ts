import { Component, OnInit, TemplateRef } from '@angular/core';


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  fullName:string;
  email:string;
  password:string;
  birthdayDate:string;
  genre:string;
  nationality:string;
  bio:string;

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { 
    
  }

  ngOnInit() {
    this.fullName='Richard Munoz';
    this.email='richosojason@msn.com';
    this.password='**********';
    this.birthdayDate='26/03/1993';
    this.genre='Masculino';
    this.nationality='Ecuatoriano';

    console.log('se cargó');
    
  }

  editInfo(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    // this.message = 'Confirmed!';
    this.modalRef.hide();
  }

}
