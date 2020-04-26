import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CategoryView } from "src/app/models/CategoryView";

@Component({
  selector: "app-tile-view",
  templateUrl: "./tile-view.component.html",
  styleUrls: ["./tile-view.component.scss"]
})
export class TileViewComponent implements OnInit {
  @Input() category: CategoryView;
  @Output() selectedCategory = new EventEmitter<CategoryView>();
  private image: string;

  constructor() {}

  ngOnInit() {
    this.image = `assets/product-images/${this.category.image}`;
  }

  private selectCategory(){
    this.selectedCategory.emit(this.category);
  }
}
