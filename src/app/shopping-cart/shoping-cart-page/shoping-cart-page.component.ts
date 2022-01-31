import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCard } from 'src/app/models/producto.model';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shoping-cart-page',
  templateUrl: './shoping-cart-page.component.html',
  styleUrls: ['./shoping-cart-page.component.scss'],
})
export class ShopingCartPageComponent implements OnInit {
  isOpenMenu = false;

  listProducts: ProductCard[] = [];


  constructor(
    private productsService: ProductsService,
    private shoppingCartService: ShoppingCartService,
    private router: Router
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

  deleteAll() {}
}
