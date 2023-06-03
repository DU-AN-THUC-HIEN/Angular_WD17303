import { Component } from '@angular/core';
import { ICategory } from 'src/app/interface/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  categories: ICategory[] = [];
  submitted = false;

  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    author: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[^0-9]+$')]],
    image: ['', [Validators.required]],
    price: [null, [Validators.required, Validators.min(1)]],
    description: ['', [Validators.required, Validators.minLength(4)]],
    categoryId: ['', [Validators.required]]
  })
  constructor(private CategoryService: CategoryService,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.CategoryService.getCategories().subscribe((data) => {
      this.categories = data
    }, error => {
      console.log(error.message);

    })
  }

  onHandleAdd() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || "",
        author: this.productForm.value.author || "",
        image: this.productForm.value.image || "",
        price: this.productForm.value.price || 0,
        description: this.productForm.value.description || "",
        categoryId: this.productForm.value.categoryId || "",
      }
      this.productService.addProduct(product).subscribe(product => {

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Product has been added successfully!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/admin/products'])
      }, error => {
        console.log(error.message);


      })
    }
  }
}