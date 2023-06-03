import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/interface/category';
import { IProduct } from 'src/app/interface/product';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  categories: ICategory[] = [];
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

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // Xóa sản phẩm
        this.productService.removeProduct(id).subscribe(() => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.products = this.products.filter(item => item._id !== id);
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Hiển thị thông báo hủy xóa sản phẩm
        Swal.fire(
          'Cancelled',
          'Your product is safe :)',
          'error'
        )
      }
    })




  }
}