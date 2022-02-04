import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  shoppingCartList: Map<number, Product> = new Map();

  constructor() {
    this.getShoppingCartList();
  }

  add(product: Product) {
    let counter = 0;
    if (this.shoppingCartList.has(product.id)) {
      counter = product.counter.getValue();
    } else {
      this.shoppingCartList.set(product.id, product);
    }
    counter++;

    product.counter.next(counter);
    this.saveShoppingCartList();
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
    this.saveShoppingCartList();
  }

  toList(): Product[] {
    return [...this.shoppingCartList.values()];
  }

  saveShoppingCartList() {
    const valuesToSafe = [...this.shoppingCartList.values()].map((product) => {
      return { ...product, counter: product.counter.value };
    });

    sessionStorage.setItem('shopping-cart', JSON.stringify(valuesToSafe));
  }

  getShoppingCartList() {
    const storage = sessionStorage.getItem('shopping-cart');
    this.shoppingCartList = new Map();
    if (!!storage) {
      const shopingCartSaved: any[] = JSON.parse(storage);
      shopingCartSaved.forEach((product) => {
        this.shoppingCartList.set(product.id, {
          ...product,
          counter: new BehaviorSubject(product.counter),
        });
      });
    }
  }

  isAddedToCart(product: Partial<Product>) {
    const id= product.id;
    if (!!id && this.shoppingCartList.has(id)) {
      return this.shoppingCartList.get(id);
    } else {
      return {...product, counter: new BehaviorSubject(0)}
    }

  }
}
