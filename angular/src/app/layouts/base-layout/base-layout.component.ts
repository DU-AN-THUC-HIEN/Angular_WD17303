import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent {
  faUser = faUser;
  searchValue = '';
  products: IProduct[] = [];
  @Input() searchResults: IProduct[] = [];


  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  getProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.docs;
    });
  }

  ngOnInit() {
    this.getProducts();
  }

  onSearch() {
    if (!this.searchValue.trim()) {
      this.searchResults = [];
      return;
    }
    this.productService.searchProducts(this.searchValue).subscribe((data: any) => {
      this.searchResults = data.docs;
      console.log(this.searchResults);

    });
  }
  onSearchBlur() {
    if (!this.searchValue.trim()) {
      this.searchResults = [];
    }
  }

}
