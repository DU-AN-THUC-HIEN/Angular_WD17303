import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interface/category';
import { IProduct } from 'src/app/interface/product';
import { CategoryService } from 'src/app/services/category/category.service';
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent {
  categoryForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],

  })
  constructor(private CategoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router) { }
  onHandleAdd() {
    if (this.categoryForm.valid) {
      const category: ICategory = {
        name: this.categoryForm.value.name || "",
      }
      this.CategoryService.addCategory(category).subscribe(category => {
        console.log('Thêm sản phẩm thành công', category);
        this.router.navigate(['/admin/categories'])
      })
    }
  }
}
