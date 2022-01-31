import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product, ProductCard } from 'src/app/models/producto.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() set product(value: Product | ProductCard) {
    if ((<ProductCard>value).counter === undefined) {
      this.counter = 0;
      this._product = <Product>value;
    } else {
      this._product = (<ProductCard>value).product;
      this.counter = (<ProductCard>value).counter;
    }
  }

  @Input() smallSize = false;

  @Output() onClickSection: EventEmitter<void> = new EventEmitter();

  _product!: Product;
  counter!:number;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {}

  goToDetail() {
    this.onClickSection.emit();
  }

  addProduct() {
    debugger;
    this.shoppingCartService.add(this._product);
  }
  deleteProduct() {
    this.shoppingCartService.delete(this._product);
  }
}
