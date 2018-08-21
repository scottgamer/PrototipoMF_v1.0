import { Component, OnInit } from '@angular/core';

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

  constructor() { 
    
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

}
