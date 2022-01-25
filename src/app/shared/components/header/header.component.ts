import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URL_SHOP } from 'src/app/core/url.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToHome() {
    this.goToURL(URL_SHOP.HOME)
  };

  goToUserAccount() {
    this.goToURL(URL_SHOP.USER)
  };

  goToShoppingCart() {
    this.goToURL(URL_SHOP.SHOPPING_CART)
  };

  goToURL(url: string) {
    this.router.navigate([url]);
  }

}
