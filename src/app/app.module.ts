import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeES from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonCardComponent } from './home/home-page/components/button-card/button-card.component';
import { ProductCardComponent } from './home/home-page/components/product-card/product-card.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ProductPageComponent } from './product/product-page/product-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { OverShadowDirective } from './shared/directives/over-shadow.directive';
import { SignUpFormComponent } from './user/components/sign-up-form/sign-up-form.component';
import { SigninFormComponent } from './user/components/signin-form/signin-form.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { StrenghBarComponent } from './user/components/strengh-bar/strengh-bar.component';
import { ButtonCounterComponent } from './home/home-page/components/button-counter/button-counter.component';

registerLocaleData(localeES, 'es-ES', localeEsExtra);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserPageComponent,
    HeaderComponent,
    ProductCardComponent,
    ButtonCardComponent,
    ProductPageComponent,
    OverShadowDirective,
    SigninFormComponent,
    SignUpFormComponent,
    StrenghBarComponent,
    ButtonCounterComponent,
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
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
