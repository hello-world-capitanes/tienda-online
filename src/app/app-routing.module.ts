import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { URL_SHOP } from './core/url.constants';
import { HomePageComponent } from './home/home-page/home-page.component';
import { UserPageComponent } from './user/user-page/user-page.component';


const routes: Routes = [
  {
    path: URL_SHOP.HOME,
    component: HomePageComponent
  },
  {
    path: URL_SHOP.USER,
    component: UserPageComponent
  },

  {
    path: '',
    redirectTo: `/${URL_SHOP.HOME}`,
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
