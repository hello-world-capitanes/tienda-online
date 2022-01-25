import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/models/producto.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  listProducts:  Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
   this.listProducts = this.productsService.getAllProducts()
  }
}
