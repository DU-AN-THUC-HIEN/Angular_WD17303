import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ICategory } from 'src/app/interface/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent {
  categories: ICategory[] = [];
  product!: IProduct;
  submitted = false;
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    author: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[^0-9]+$')]],
    image: ['', [Validators.required]],
    price: [0, [Validators.required, Validators.min(1)]],
    description: ['', [Validators.required, Validators.minLength(4)]],
    categoryId: ['', [Validators.required]]
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
    }),
      this.categoryService.getCategories().subscribe((data) => {
        this.categories = data
      }, error => {
        console.log(error.message);

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
