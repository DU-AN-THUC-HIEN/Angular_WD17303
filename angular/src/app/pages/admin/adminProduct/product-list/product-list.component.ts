import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data: any) => {
        this.products = data.docs; 

      },
      (error) => {
        console.log(error);
      }
    );
  }
  onHandleRemove(id: any){
    this.productService.removeProduct(id).subscribe(() =>{
      this.products = this.products.filter(item => item._id !== id)
    })
  }
}