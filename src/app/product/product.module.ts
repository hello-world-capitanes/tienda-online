import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [ProductPageComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
