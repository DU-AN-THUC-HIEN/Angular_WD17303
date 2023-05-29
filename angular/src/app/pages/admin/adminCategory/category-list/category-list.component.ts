import { Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/interface/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  categories: ICategory[] = [];
  @ViewChild('notification') notification!: ElementRef<HTMLDivElement>;

  constructor(private CategoryService: CategoryService) {
    this.CategoryService.getCategories().subscribe((data) => {
      this.categories = data
    }, error => {
      console.log(error.message);
    })
  }
  removeItem(id: any) {
    this.CategoryService.removeCategory(id).subscribe(category => {
      const newCategory = this.categories.filter((category) => category._id != id);
      this.categories = newCategory
      this.showNotification('Xóa danh mục thành công');
    })
  }
  showNotification(msg: string) {
    this.notification.nativeElement.innerHTML = msg;
    this.notification.nativeElement.style.display = 'block';
    setTimeout(() => {
      this.notification.nativeElement.style.display = 'none';
    }, 3000);
  }
}
