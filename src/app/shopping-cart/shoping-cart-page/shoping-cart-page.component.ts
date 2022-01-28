import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/producto.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shoping-cart-page',
  templateUrl: './shoping-cart-page.component.html',
  styleUrls: ['./shoping-cart-page.component.scss'],
})
export class ShopingCartPageComponent implements OnInit {
  isOpenMenu = false;

  listProducts: Product[] = [];


  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listProducts = this.productsService.getAllProducts();
  }



  openMenu() {
    this.isOpenMenu = true;
  }

  closeMenu() {
    this.isOpenMenu = false;
  }
}
