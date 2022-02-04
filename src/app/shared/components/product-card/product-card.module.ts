import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonCardComponent } from '../button-card/button-card.component';
import { ButtonCounterComponent } from '../button-counter/button-counter.component';
import { ProductCardComponent } from './product-card.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    ButtonCardComponent,
    ButtonCounterComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [ProductCardComponent]
})
export class ProductCardModule { }
