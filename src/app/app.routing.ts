import { Routes, RouterModule, Router } from "@angular/router";
import { NgModule, Component } from "@angular/core";
import { InitViewComponent } from "./init-view/init-view.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ProductsComponent } from "./products/products.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { SliderComponent } from "./slider/slider.component";
import { ProductsViewComponent } from "./products/products-view/products-view.component";
import { CategoriesViewComponent } from "./products/categories-view/categories-view.component";

const appRoutes: Routes = [
  { path: "", component: InitViewComponent },
  { path: "navigation", redirectTo: "navigation/intro" },
  {
    path: "navigation/products",
    redirectTo: "navigation/products/categories-view"
  },
  {
    path: "navigation",
    component: NavigationComponent,
    children: [
      { path: "intro", component: SliderComponent },
      {
        path: "products",
        component: ProductsComponent,
        children: [
          { path: "categories-view", component: CategoriesViewComponent },
          { path: "products-view", component: ProductsViewComponent }
        ]
      },
      { path: "about-us", component: AboutUsComponent },
      { path: "contact-us", component: ContactUsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
