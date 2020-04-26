import { Component, OnInit } from "@angular/core";
import { fadeAnimation } from "./navigation.router.animation";
import { RouterOutlet, Router } from "@angular/router";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
  animations: [fadeAnimation]
})
export class NavigationComponent implements OnInit {
  private applyBlackBg: boolean = false;
  private showMenu: boolean = false;

  constructor(private routerOutlet: RouterOutlet, private router: Router) {
    this.router.events.subscribe(route => {
      this.applyBlackBg = this.router.url.includes("products");
    });
  }

  ngOnInit() {}
}
