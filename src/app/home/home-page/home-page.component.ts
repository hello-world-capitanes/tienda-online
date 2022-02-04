import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { URL_SHOP } from 'src/app/core/url.constants';
import { getId, Product, ProductCard } from 'src/app/models/producto.model';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  listProducts: (Product | ProductCard)[] = [];

  subscription!: Subscription;

  constructor(
    private productsService: ProductsService,
    private shoppinCartService: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listProducts = this.productsService.getAllProducts();

    console.log(this.listProducts);

    this.subscription = this.shoppinCartService.hasChanged$.subscribe(
      (productUpdated) => {
        const index = this.listProducts.findIndex(
          (product) => productUpdated.product.id === getId(product)
        );

        this.listProducts[index] = productUpdated;
      }
    );
  }

  goToDetail(product: Product | ProductCard) {
    let realProduct: Product = product.hasOwnProperty('product')
      ? (product as ProductCard).product
      : (product as Product);
    this.router.navigate([
      URL_SHOP.PRODUCT_DETAIL,
      realProduct.id,
      realProduct.name,
    ]);
  }

  ngOnDestroy(): void {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
