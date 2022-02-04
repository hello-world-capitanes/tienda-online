import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product, ProductCard } from '../models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  shoppingCartList: Map<number, ProductCard> =
    new Map();

  hasChangedSource: Subject<ProductCard> = new Subject();

  constructor() {}

  add(product: Product) {
    let counter = 0;
    if (this.shoppingCartList.has(product.id)) {
      counter = this.shoppingCartList.get(product.id)?.counter || 0;
    }
    counter++;
    this.shoppingCartList.set(product.id, { product, counter });

    this.hasChangedSource.next({ product, counter });
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

    this.hasChangedSource.next({ product, counter });
  }

  toList(): ProductCard[] {
    return [...this.shoppingCartList.values()];
  }

  get hasChanged$() {
    return this.hasChangedSource.asObservable();
  }
}
