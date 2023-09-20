import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';
import { NavigationComponent } from './+pages/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MyRequestsComponent } from './+pages/my-requests/my-requests.component';
import { NewRestaurantComponent } from './+pages/my-requests/new-restaurant/new-restaurant.component';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RestaurantsComponent,
    NavigationComponent,
    MyRequestsComponent,
    NewRestaurantComponent
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class RestaurantsModule { }
