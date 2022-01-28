import { Component, ViewChild } from '@angular/core';
import { ShopingCartPageComponent } from './shopping-cart/shoping-cart-page/shoping-cart-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ShopingCartPageComponent) shoppingCart!: ShopingCartPageComponent;
  title = 'tienda-online';

  openMenu() {
    this.shoppingCart.openMenu();
  }
}
