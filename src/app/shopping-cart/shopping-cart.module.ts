import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProductCardComponent } from '../home/home-page/components/product-card/product-card.component';
import { ShopingCartPageComponent } from './shoping-cart-page/shoping-cart-page.component';



@NgModule({
  declarations: [ShopingCartPageComponent, ProductCardComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [ShopingCartPageComponent]
})
export class ShoppingCartModule { }
