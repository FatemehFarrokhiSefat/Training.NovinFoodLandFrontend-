import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './+pages/signin/signin.component';
import { SignupComponent } from './+pages/signup/signup.component';
import { AdminsigninComponent } from './+pages/adminsignin/adminsignin.component';
import { adminGuard } from './+guards/admin.guard';
import { restaurantOwnerGuard } from './+guards/restaurant-owner.guard';
import { customerGuard } from './+guards/customer.guard';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  {path:'adminsignin',component:AdminsigninComponent},
  {path:'signup',component:SignupComponent},
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'admins',canMatch:[adminGuard], loadChildren: () => import('./admins/admins.module').then(m => m.AdminsModule) },
  { path: 'restaurants',canMatch:[restaurantOwnerGuard], loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule) },
  { path: 'customers',canMatch:[customerGuard], loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: '**', redirectTo: '/signin' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
