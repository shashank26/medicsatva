import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  @Input() product: Product;
  @Output() selectedProduct = new EventEmitter<Product>();

  private productView:Product;

  constructor() {}

  ngOnInit() {
    this.productView = this.product;
    this.productView.image = `url(assets/product-images/${this.product.image})`;
  }

  private selectProduct(){
    this.selectedProduct.emit(this.productView);
  }

}
