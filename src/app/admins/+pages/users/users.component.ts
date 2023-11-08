import { Component } from '@angular/core';
import { DataGridColumn } from 'src/app/shared/data-grid/data-grid-column';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  columns:DataGridColumn[]=[
    {
      field:'userType',
      title:'نوع',
      type:'text'
    },
    {
      field:'fullname',
      title:'نام ونام خانوادگی',
      type:'text'
    },
    {
      field:'username',
      title:'شماره همراه',
      type:'text'
    },
    {
      field:'email',
      title:'پست الکترونیک',
      type:'button'
    },
    {
      field:'verified',
      title:'وضعیت',
      type:'check'
    },
    {
      field:'address',
      title:'آدرس',
      type:'text'
    },
  ];
  edit(row:any){
    console.log(row);
  }
  remove(row:any){
    console.log(row);
  }
}
