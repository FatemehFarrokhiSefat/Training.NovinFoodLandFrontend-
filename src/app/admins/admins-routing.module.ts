import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins.component';
import { UsersComponent } from './+pages/users/users.component';
import { RequestComponent } from './+pages/request/request.component';

const routes: Routes = [
  { path: '', component: AdminsComponent, children: [
    { path: 'users',component:UsersComponent },
    { path: 'requests',component:RequestComponent}
  ]},
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminsRoutingModule {}
