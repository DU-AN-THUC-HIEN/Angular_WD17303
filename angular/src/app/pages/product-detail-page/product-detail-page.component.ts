import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interface/category';
import { IProduct } from 'src/app/interface/product';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent {
  quantity: number = 1;
  product !: IProduct
  products: IProduct[] = [];
  categories: ICategory[] = [];
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe(params => {
      const id = String(params.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
      }, error => console.log(error.message)
      )
    })
    this.productService.getProducts().subscribe((products: any) => {
      this.products = products.docs.filter((product: IProduct) => product.categoryId === this.product.categoryId);
      console.log(this.products);

    })
  }


  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }
}
