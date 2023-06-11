import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog'
import { MatPaginatorModule } from '@angular/material/paginator'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { SignInComponent } from './pages/sign/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign/sign-up/sign-up.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryListComponent } from './pages/admin/adminCategory/category-list/category-list.component';
import { ProductAddComponent } from './pages/admin/adminProduct/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/admin/adminProduct/product-update/product-update.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { BlogViewPageComponent } from './pages/blog-view-page/blog-view-page.component';
import { ProductListComponent } from './pages/admin/adminProduct/product-list/product-list.component';

import { CategoryEditComponent } from './pages/admin/adminCategory/category-edit/category-edit.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { UserListComponent } from './pages/admin/adminUser/user-list/user-list.component';
import { UserUpdateComponent } from './pages/admin/adminUser/user-update/user-update.component';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';
import { BlogAddComponent } from './pages/admin/adminBlog/blog-add/blog-add.component';
import { BlogEditComponent } from './pages/admin/adminBlog/blog-edit/blog-edit.component';
import { BlogListComponent } from './pages/admin/adminBlog/blog-list/blog-list.component';
import { CategoryAddComponent } from './pages/admin/adminCategory/category-add/category-add.component';
import { ListCommentComponent } from './pages/admin/adminComment/list-comment/list-comment.component';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BaseLayoutComponent,
    AdminLayoutComponent,
    PageNotFoundComponent,
    BannerComponent,
    CategoriesComponent,
    ProductViewComponent,
    BlogPageComponent,
    ContactPageComponent,
    DashboardComponent,
    ProductDetailPageComponent,
    SignInComponent,
    SignUpComponent,
    CartComponent,
    CategoryListComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    AboutPageComponent,
    ContactUsPageComponent,
    BlogViewPageComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    UserListComponent,
    UserUpdateComponent,
    CategoryDetailComponent,
    BlogAddComponent,
    BlogEditComponent,
    BlogListComponent,
    ListCommentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatDialogModule,
    MatPaginatorModule,
    BrowserAnimationsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
