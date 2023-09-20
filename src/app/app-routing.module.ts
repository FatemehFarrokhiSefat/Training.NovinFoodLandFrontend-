import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './+pages/signin/signin.component';
import { SignupComponent } from './+pages/signup/signup.component';
import { AdminsigninComponent } from './+pages/adminsignin/adminsignin.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  {path:'adminsignin',component:AdminsigninComponent},
  {path:'signup',component:SignupComponent},
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'admins', loadChildren: () => import('./admins/admins.module').then(m => m.AdminsModule) },
  { path: 'restaurants', loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule) },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: '**', redirectTo: '/signin' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
