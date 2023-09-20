import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants.component';
import { MyRequestsComponent } from './+pages/my-requests/my-requests.component';

const routes: Routes = [{ path: '', component: RestaurantsComponent,children:[
  {path:'myrequests',component:MyRequestsComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
