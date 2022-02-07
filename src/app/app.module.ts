import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeES from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './core/home/home-page/home-page.component';
import { ProductCardModule } from './shared/components/product-card/product-card.module';
import { OverShadowDirective } from './shared/directives/over-shadow.directive';
import { SharedModule } from './shared/shared.module';
import { SignUpFormComponent } from './core/user/components/sign-up-form/sign-up-form.component';
import { SigninFormComponent } from './core/user/components/signin-form/signin-form.component';
import { StrenghBarComponent } from './core/user/components/strengh-bar/strengh-bar.component';
import { UserPageComponent } from './core/user/user-page/user-page.component';

registerLocaleData(localeES, 'es-ES', localeEsExtra);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserPageComponent,
    OverShadowDirective,
    SigninFormComponent,
    SignUpFormComponent,
    StrenghBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTabsModule,

    ProductCardModule,
    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
