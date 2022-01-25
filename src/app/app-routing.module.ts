import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { UserPageComponent } from './user/user-page/user-page.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'user',
    component: UserPageComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
