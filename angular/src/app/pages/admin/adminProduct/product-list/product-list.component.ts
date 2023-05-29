import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/interface/category';
import { IProduct } from 'src/app/interface/product';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  categories: ICategory[] = [];
  @ViewChild('notification') notification!: ElementRef<HTMLDivElement>;
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,

  ) { }

  async ngOnInit() {
    try {
      const productsData: any = await this.productService.getProducts().toPromise();
      this.products = productsData.docs;
      const categoriesData: any = await this.categoryService.getCategories().toPromise();
      this.categories = categoriesData;
      this.mapCategoryToProducts();
    } catch (error) {
      console.log(error);
    }
  }

  mapCategoryToProducts() {
    this.products = this.products.map((product: IProduct) => {
      const category = this.categories.find((category: ICategory) => category._id === product.categoryId);
      return { ...product, category: category ? category.name : '' };
    });
  }

  onHandleRemove(id: any) {
    this.productService.removeProduct(id).subscribe(() => {
      this.products = this.products.filter(item => item._id !== id);
      this.showNotification('Xóa sản phẩm thành công');

    })
  }
  showNotification(msg: string) {
    this.notification.nativeElement.innerHTML = msg;
    this.notification.nativeElement.style.display = 'block';

    setTimeout(() => {
      this.notification.nativeElement.style.display = 'none';
    }, 3000);
  }
}