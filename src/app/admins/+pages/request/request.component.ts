import { Component } from '@angular/core';
import { DataGridColumn } from 'src/app/shared/data-grid/data-grid-column';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  columns:DataGridColumn[]=[
    {
      field:'title',
      title:'عنوان',
      type:'text'
    },
    {
      field:'address',
      title:'آدرس',
      type:'text'
    },
    {
      field:'ownerUsername',
      title:'شماره همراه',
      type:'text'
    }
  ];
}
