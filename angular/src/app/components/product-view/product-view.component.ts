import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
  products: IProduct[] = [];
  
  constructor(
    private productService: ProductService) {
      
  }
  ngOnInit(){
    this.productService.getProducts()
    .subscribe((data : any) => this.products = data.docs)
  }
 
}
