import { Component, OnInit } from "@angular/core";
import { productsViewAnimations } from "./products-view.animation";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/Services/products.service";
import { Products } from "src/app/models/Products";
import { Product } from "src/app/models/Product";

@Component({
  selector: "app-products-view",
  templateUrl: "./products-view.component.html",
  styleUrls: ["./products-view.component.scss"],
  animations: [productsViewAnimations]
})
export class ProductsViewComponent implements OnInit {
  category: string;
  products: Product[];
  productsLoaded: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(data => {
      if (data && data.category) {
        this.loadProducts(data.category);
      }
    });
  }

  loadProducts(category: string) {
    this.productService.getProducts().subscribe((products: Products[]) => {
      const p = products.filter(
        product =>
          product.category.toLowerCase().trim() ===
          category.toLowerCase().trim()
      );
      if (p && p.length > 0) {
        this.category = p[0].category;
        this.products = p[0].products;
        this.productsLoaded = true;
      } else {
        this.category = "Sorry!, this category does not exist.";
      }
    });
  }
}
