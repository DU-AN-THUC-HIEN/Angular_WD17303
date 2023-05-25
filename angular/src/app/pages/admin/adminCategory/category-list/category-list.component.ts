import { Component } from '@angular/core';
import { ICategory } from 'src/app/interface/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  categories: ICategory[] = [];

  constructor(private CategoryService: CategoryService) {
    this.CategoryService.getCategories().subscribe((data) => {
      this.categories = data

    }, error => {
      console.log(error.message);

    })
  }
}
