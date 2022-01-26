import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/producto.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {

  product: Product | undefined;
  constructor(private route: ActivatedRoute, private productService: ProductsService) {}

  ngOnInit(): void {
    const idProduct = this.route.snapshot.params['id'];
    this.product = this.productService.getProductById(+idProduct);

  }
}
