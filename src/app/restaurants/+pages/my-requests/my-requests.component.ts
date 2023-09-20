import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent {
  constructor(public dialog: MatDialog) {}
  create(){
      const dialogRef = this.dialog.open(NewRestaurantComponent, {
        // data: {name: this.name, animal: this.animal},
      });
  
      // dialogRef.afterClosed().subscribe(result => {
      //   console.log('The dialog was closed');
      //   this.animal = result;
      // });
  }
}
