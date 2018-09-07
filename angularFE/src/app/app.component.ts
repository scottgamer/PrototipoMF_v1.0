import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CollapseModule} from 'ngx-bootstrap/collapse';

//classes
import { Category } from '../app/models/category-model';

//services
import { CategoryService } from '../app/services/category.service';


@Component({
  selector: 'app-root',
  providers:[CategoryService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  categories:Category[];

  isCollapsed = true;

  public constructor( private titleService: Title, 
                      private collapse:CollapseModule,
                      private categoryService:CategoryService) { 
    this.isCollapsed = true;
  }

  ngOnInit() {
    this.setTitle('Catalogo de Aplicaciones para Discapacidad Visual');
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
        .subscribe(categories => this.categories = categories);
    console.log('Categories service loaded');
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
