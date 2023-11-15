import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import { DataGridColumn } from 'src/app/shared/data-grid/data-grid-column';
import { RestaurantsService } from '../../+services/restaurants.service';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent {

  columns:DataGridColumn[]=[
    {
      field:'title',
      title:'عنوان',
      type:'text'
    },
    {
      field:'creationTime',
      title:'زمان درخواست',
      type:'text'
    },
    {
      field:'address',
      title:'آدرس',
      type:'text'
    }
  ];

  constructor(public dialog: MatDialog , public backend:RestaurantsService) {}
  create(){
    const dialogRef = this.dialog.open(NewRestaurantComponent, {
      // data: {name: this.name, animal: this.animal},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.backend.createRequest(result.title,result.address)
        .subscribe(res=>{
          console.log('موفق!');
        })
      }
        console.log('The dialog was closed');
    });
  }
}
