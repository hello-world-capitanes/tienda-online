import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { MatTabNavPanel } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { ShopingCartPageComponent } from 'src/app/core/shopping-cart/shoping-cart-page/shoping-cart-page.component';
import { URL_SHOP } from 'src/app/core/url.constants';
import { SignUpFormComponent } from 'src/app/core/user/components/sign-up-form/sign-up-form.component';
import { SigninFormComponent } from 'src/app/core/user/components/signin-form/signin-form.component';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() tabPanel?: MatTabNavPanel;
  @Input() sidenav?: MatDrawer;
  
  @ViewChild(ShopingCartPageComponent) shoppingCart!: ShopingCartPageComponent;

  @Output() onOpenMenu: EventEmitter<void> = new EventEmitter();

  constructor(
    private router: Router,
    private matDialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  openMenu() {
    this.shoppingCart?.openMenu();
  }

  goToHome() {
    this.goToURL(URL_SHOP.HOME);
  }

  goToUserAccount() {
    if (!this.isUserLogged()) {
      this.openSigninForm();
    } else {
      this.goToURL(URL_SHOP.USER);
    }
  }

  goToURL(url: string) {
    this.router.navigate([url]);
  }

  private isUserLogged() {
    return this.authService.userLogged;
  }

  private openSigninForm() {
    const dialogRef = this.matDialog.open(SigninFormComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((result: User | null) => {
      if (!result) {
        return;
      }

      if (result && !result.password) {
        this.openSignUpForm(result);
      }

      if(result && result.password && result.email){
        this.authService.userLogin = {...result, logged: true};
      }
    });
  }

  private openSignUpForm (user: User) {
  const dialogRef = this.matDialog.open(SignUpFormComponent, { data: { email: user.email},
      width: '500px',
    });
    dialogRef.afterClosed().subscribe();
  }
}
