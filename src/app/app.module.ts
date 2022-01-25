import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
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
import { HeaderComponent } from './shared/components/header/header.component';
import { UserPageComponent } from './user/user-page/user-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserPageComponent,
    HeaderComponent,
    ProductCardComponent,
    ButtonCardComponent
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
