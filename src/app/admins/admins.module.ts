import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsComponent } from './admins.component';
import { NavigationComponent } from './+pages/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UsersComponent } from './+pages/users/users.component';
import { DataGridComponent } from '../shared/data-grid/data-grid.component';


@NgModule({
  declarations: [
    AdminsComponent,
    NavigationComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DataGridComponent,
    
  ]
})
export class AdminsModule { }
