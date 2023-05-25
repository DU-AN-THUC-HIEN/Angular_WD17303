import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductListComponent } from './pages/admin/adminProduct/product-list/product-list.component';
import { CategoryListComponent } from './pages/admin/adminCategory/category-list/category-list.component';
import { ProductAddComponent } from './pages/admin/adminProduct/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/admin/adminProduct/product-update/product-update.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { BlogViewPageComponent } from './pages/blog-view-page/blog-view-page.component';
import { CategoryAddComponent } from './pages/admin/adminCategory/category-add/category-add.component';

const routes: Routes = [
  {
    path: "", component: BaseLayoutComponent, children: [
      { path: "", component: HomePageComponent },
      { path: "about", component: AboutPageComponent },
      { path: "contact", component: ContactUsPageComponent },
      { path: "blog", component: BlogViewPageComponent },
      { path: "product/:id", component: ProductDetailPageComponent },
      {path:"cart",component:CartComponent},
      { path: "signin", component: SignInComponent },
      { path: "signup", component: SignUpComponent }

    ]
  },
  {
    path: "admin", component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "products", component: ProductListComponent },
      { path: "products/add", component: ProductAddComponent },
      { path: "products/:id/update", component: ProductUpdateComponent },
      { path: "categories", component: CategoryListComponent },
      {path: "categories/add", component: CategoryAddComponent}

    ]

  },
  {
    path: "**", component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
