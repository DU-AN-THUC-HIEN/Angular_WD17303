import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interface/category';
import { IComment } from 'src/app/interface/comment';
import { IProduct } from 'src/app/interface/product';
import { CategoryService } from 'src/app/services/category/category.service';
import { CommentService } from 'src/app/services/comment/comment.service';
import { ProductService } from 'src/app/services/product/product.service';
import { FormBuilder, Validators } from '@angular/forms';

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
  formData: { description: string, userId: string, productId: string } = { description: '', userId: '', productId: '' };
  commentForm = this.FormBuilder.group({
    userId: [''], // Truyền giá trị của userId từ instance của IProduct
    productId: [''], // Truyền giá trị của productId từ instance của IProduct
    description: ['']
  })

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private CommentService: CommentService,
    private FormBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe(params => {
      const id = String(params.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
        // set idProduct in formData
        this.formData.productId = id;
      }, error => console.log(error.message)
      )
      // -------------------------
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const { user: { _id } } = JSON.parse(storedUser);
        const idUser = _id;
        // set idUser in formData
        this.formData.userId = idUser;
      }
      this.commentForm.patchValue({
        userId: this.formData.userId,
        productId: id
      });
    });
    // ----------------------------------
    this.productService.getProducts().subscribe((products: any) => {
      this.products = products.docs.filter((product: IProduct) => product.categoryId === this.product.categoryId);
      console.log(this.products);
    })
  }

  // -------------------------------
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  increaseQuantity() {
    this.quantity++;
  }
  //--------------------------------

  onHandleAddComment() {
    if (this.commentForm.valid) {
      const formValue = this.commentForm.value;
      this.CommentService.addComment(formValue).subscribe((data: IComment) => {
        console.log("Thêm bình luận thành công");

      })
    }

  }
}
