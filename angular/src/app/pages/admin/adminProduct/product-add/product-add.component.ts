import { Component } from '@angular/core';
import { ICategory } from 'src/app/interface/category';
import { CategoryService } from 'src/app/services/category/category.service';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { IProduct } from 'src/app/interface/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  categories: ICategory[] = [];

  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    author: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    image: ['', [Validators.required, Validators.minLength(4)]],
    description: ['', [Validators.required, Validators.minLength(4)]]
  })
  constructor(private CategoryService: CategoryService, 
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {
    this.CategoryService.getCategories().subscribe((data: any) => {
      this.categories = data.docs

    }, error => {
      console.log(error.message);

    })
  }
  onHandleAdd() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || "",
        author: this.productForm.value.author || "",
        price: this.productForm.value.price || 0,
        image: this.productForm.value.image || "",
        description: this.productForm.value.description || "",

      }
      this.productService.addProduct(product).subscribe(product => {
        console.log('Thành công', product);
        this.router.navigate(['/admin/products'])
      })
    }
  
  }
  }