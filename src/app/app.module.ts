import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeES from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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
import { UserPageComponent } from './user/user-page/user-page.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-ES' }, { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
