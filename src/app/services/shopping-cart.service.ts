import { Injectable } from '@angular/core';
import { Product } from '../models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  shoppingCartList: Map<number, Product> = new Map();

  constructor() {}

  add(product: Product) {
    let counter = 0;
    if (this.shoppingCartList.has(product.id)) {
      counter = product.counter.getValue();
    } else {
      this.shoppingCartList.set(product.id, product);
    }
    counter++;

    product.counter.next(counter);
  }

  delete(product: Product) {
    let counter = 0;
    if (this.shoppingCartList.has(product.id)) {
      counter = product.counter.getValue();
      counter--;
    }

    if (counter == 0 || counter < 0) {
      this.shoppingCartList.delete(product.id);
    }

      product.counter.next(counter);

  }

  toList(): Product[] {
    return [...this.shoppingCartList.values()];
  }


}
