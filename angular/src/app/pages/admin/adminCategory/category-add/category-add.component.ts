import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interface/category';
import { IProduct } from 'src/app/interface/product';
import { CategoryService } from 'src/app/services/category/category.service';
import Swal from 'sweetalert2';
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
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Category has been added successfully!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/admin/categories'])
      }, error => {
        console.log(error.message);
    
      })
    }
  }
}
