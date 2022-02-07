import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/producto.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shoping-cart-page',
  templateUrl: './shoping-cart-page.component.html',
  styleUrls: ['./shoping-cart-page.component.scss'],
})
export class ShopingCartPageComponent implements OnInit {
  isOpenMenu = false;

  listProducts: Product[] = [];


  constructor(
    private shoppingCartService: ShoppingCartService,
  ) {}

  ngOnInit(): void {

  }

  openMenu() {
    this.listProducts = this.shoppingCartService.toList();
    this.isOpenMenu = true;
  }

  closeMenu() {
    this.isOpenMenu = false;
  }

  deleteAll() {

    //Esto también se puede hacer con un observable
    this.shoppingCartService.deleteAll();
    this.listProducts = this.shoppingCartService.toList();
  }
}
