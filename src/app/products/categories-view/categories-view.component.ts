import { Component, OnInit } from "@angular/core";
import { Products } from "src/app/models/Products";
import { CategoryView } from "src/app/models/CategoryView";
import { ProductService } from "src/app/Services/products.service";
import { Router, ActivatedRoute } from "@angular/router";
import { categoriesViewAnimations } from "./categories-view.animation";

@Component({
  selector: "app-categories-view",
  templateUrl: "./categories-view.component.html",
  styleUrls: ["./categories-view.component.scss"],
  animations: [categoriesViewAnimations]
})
export class CategoriesViewComponent implements OnInit {
  private products: Products[];
  private categories: CategoryView[];
  private showProducts: boolean = false;
  private categoriesPhase: number = 0;
  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {    
    this.productService.getProducts().subscribe(x => {
      this.initialize(x);
    });
  }

  private initialize(products: Products[]) {
    this.products = products;
    this.categories = new Array<CategoryView>();
    this.products.map(x => {
      this.categories.push(new CategoryView(x.category, x.products[0].image));

      setTimeout(() => {
        this.categoriesPhase = 1;
      }, 2000);
    });
  }

  private selectedCategory(category: CategoryView) {
    this.categoriesPhase = 2;
    setTimeout(() => {
      this.router.navigate(["../products-view"], {
        relativeTo: this.activatedRoute,
        queryParams: {
          category: category.name
        }
      });
    }, 1000);
  }
}
