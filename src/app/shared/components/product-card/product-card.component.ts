import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/producto.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() set product(value: Product) {
    this._product = value;

    if(!!this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this._product.counter.subscribe(counter => {
      this.counter = counter;
    });

  }

  @Input() smallSize = false;

  @Output() onClickSection: EventEmitter<void> = new EventEmitter();

  _product!: Product;
  counter!:number;
  subscription!: Subscription

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {}

  goToDetail() {
    this.onClickSection.emit();
  }

  addProduct() {
    this.shoppingCartService.add(this._product);
  }
  deleteProduct() {
    this.shoppingCartService.delete(this._product);
  }
}
