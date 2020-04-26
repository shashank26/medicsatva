import { Component, OnInit } from "@angular/core";
import {
  headerAnimation,
  expandAnimation,
  expandAnimationRight
} from "../common/animations";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
  animations: [headerAnimation, expandAnimation, expandAnimationRight]
})
export class ProductsComponent implements OnInit {

  showProducts: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(data => {
      this.showProducts = this.router.url.includes("products-view");
    });
  }
}
