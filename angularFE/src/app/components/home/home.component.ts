import { Component, OnInit } from '@angular/core';

//modules
import { BarRatingModule } from "ngx-bar-rating";
//classes
import { Application } from '../../models/application-model';
//services
import { ApplicationService } from '../../services/application.service';


@Component({
  selector: 'app-home',
  providers: [ApplicationService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  applications: Application[];

  lorem: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci quod nemo ' +
    'vitae cumque sit, iusto porro! Eligendi nesciunt et amet numquam dolore voluptatem a ' +
    'maiores deleniti. Ex, cum ipsam.';

  selectedApplication:Application;

  public constructor(private barRatingModule: BarRatingModule, private appService:ApplicationService) {

  }

  ngOnInit() {
    this.getApplications();
    
  }

  getApplications(): void {
    this.appService.getApplications()
        .subscribe(applications => this.applications = applications);
  }

  onSelect(application: Application): void {
    this.selectedApplication = application;
    console.log('selected application: ' + this.selectedApplication.name );
  }

}
