import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { URL_SHOP } from 'src/app/core/url.constants';
import { Product } from 'src/app/models/producto.model';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  listProducts: Product[] = [];

  subscription!: Subscription;

  constructor(
    private productsService: ProductsService,
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.listProducts = this.productsService.getAllProducts().map(product => {
      return this.shoppingCartService.isAddedToCart(product) as Product
    });

    console.log(this.listProducts);

  }

  goToDetail(product: Product ) {

    this.router.navigate([
      URL_SHOP.PRODUCT_DETAIL,
      product.id,
      product.name,
    ]);
  }

  ngOnDestroy(): void {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
