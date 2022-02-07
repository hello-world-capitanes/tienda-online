import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ShoppingCartModule } from '../core/shopping-cart/shopping-cart.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ButtonLanguageComponent } from './components/button-language/button-language.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        ButtonLanguageComponent,
    ],
    imports: [
        CommonModule,

        ShoppingCartModule,

        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTabsModule,
        MatListModule,
        MatDividerModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatBadgeModule,
        MatExpansionModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ]
})
export class SharedModule { }
  