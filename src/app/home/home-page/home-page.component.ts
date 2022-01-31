import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URL_SHOP } from 'src/app/core/url.constants';
import { Product } from 'src/app/models/producto.model';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  listProducts:  Product[] = [];

  constructor(private productsService: ProductsService, private router: Router) {}

  ngOnInit(): void {
   this.listProducts = this.productsService.getAllProducts()
   console.log(this.listProducts);
  }

  goToDetail(producto: Product) {
    this.router.navigate([URL_SHOP.PRODUCT_DETAIL, producto.id, producto.name])
  }
}
