import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {UserPageComponent} from './user-page/user-page.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'login-register', component: CreateUserComponent},
  {path: 'user', component: UserPageComponent},
  // {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
