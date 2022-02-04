import { Injectable } from '@angular/core';
import { Product, ProductCard } from '../models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  shoppingCartList: Map<number, ProductCard> =
    new Map();

  constructor() {}

  add(product: Product) {
    let counter = 0;
    if (this.shoppingCartList.has(product.id)) {
      counter = this.shoppingCartList.get(product.id)?.counter || 0;
    }
    counter++;
    this.shoppingCartList.set(product.id, { product, counter });
  }

  delete(product: Product) {
    let counter = 0;
    if (this.shoppingCartList.has(product.id)) {
      counter = this.shoppingCartList.get(product.id)?.counter || 0;
      counter--;
    }

    if (counter == 0 || counter < 0) {
      this.shoppingCartList.delete(product.id);
    } else {
      this.shoppingCartList.set(product.id, { product, counter });
    }
  }

  toList(): ProductCard[] {
    return [...this.shoppingCartList.values()];
  }
}
