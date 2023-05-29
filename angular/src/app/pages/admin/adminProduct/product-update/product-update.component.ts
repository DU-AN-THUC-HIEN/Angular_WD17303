import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ICategory } from 'src/app/interface/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent {
  categories: ICategory[] = [];
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    author: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    image: [''],
    description: [''],
    categoryId: ['']

  })

  constructor(private categoryService: CategoryService,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.categoryService.getCategories().subscribe((data) => {
        this.categories = data
      }, error => {
        console.log(error.message);

      })

      const id = String(params.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
        this.productForm.patchValue({
          name: this.product.name,
          author: this.product.author,
          price: this.product.price,
          image: this.product.image,
          description: this.product.description,
          categoryId: this.product.categoryId
        })
      }, error => console.log(error.message)
      )
      console.log(this.productForm);

    })

  }
  onHandleUpdate() {
    if (this.productForm.valid) {
      const newProduct: IProduct = {
        _id: this.product._id,
        name: this.productForm.value.name || "",
        author: this.productForm.value.author || "",
        price: this.productForm.value.price || 0,
        image: this.productForm.value.image || "",
        description: this.productForm.value.description || "",
        categoryId: this.productForm.value.categoryId || "",
      }
      console.log(newProduct);

      this.productService.updateProduct(newProduct).subscribe(product => {
        this.router.navigate(['/admin/products'])
      })
    }
  }
}
