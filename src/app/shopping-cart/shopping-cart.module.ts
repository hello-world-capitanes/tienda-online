import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProductCardModule } from '../shared/components/product-card/product-card.module';
import { ShopingCartPageComponent } from './shoping-cart-page/shoping-cart-page.component';



@NgModule({
  declarations: [ShopingCartPageComponent],
  imports: [
    CommonModule,
    MatIconModule,
    ProductCardModule
  ],
  exports: [ShopingCartPageComponent]
})
export class ShoppingCartModule { }
