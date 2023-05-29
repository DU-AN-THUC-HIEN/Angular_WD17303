import { Component } from '@angular/core';
import { ICategory } from 'src/app/interface/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
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
    image: [''],
    price: [0],
    description: [''],
    categoryId: ['']
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
        console.log('Thêm sản phẩm thành công', product);
        this.router.navigate(['/admin/products'])
      })
    }
  }