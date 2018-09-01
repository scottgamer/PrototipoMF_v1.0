import { Injectable } from '@angular/core';

//import classes
import { Application } from '../models/application-model';
import { APPLICATIONS } from '../components/application/application-mock';

import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ApplicationService {

  constructor() { }

  //returns an Observable<Application[]> that emits a single 
  //value, the array of mock heroes.
  getApplications(): Observable<Application[]> {
    console.log('Application service loaded');
    return of(APPLICATIONS);
  }

}
