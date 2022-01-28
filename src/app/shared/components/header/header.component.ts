import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { URL_SHOP } from 'src/app/core/url.constants';
import { User } from 'src/app/models/user.model';
import { SignUpFormComponent } from 'src/app/user/components/sign-up-form/sign-up-form.component';
import { SigninFormComponent } from 'src/app/user/components/signin-form/signin-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private matDialog: MatDialog) {}

  ngOnInit(): void {}

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

  goToShoppingCart() {
    this.goToURL(URL_SHOP.SHOPPING_CART);
  }

  goToURL(url: string) {
    this.router.navigate([url]);
  }

  private isUserLogged() {
    return false;
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
    });
  }

  private openSignUpForm (user: User) {
  const dialogRef = this.matDialog.open(SignUpFormComponent, { data: { email: user.email},
      width: '500px',
    });
    dialogRef.afterClosed().subscribe();
  }
}
