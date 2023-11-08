import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { DataGridColumn } from './data-grid-column';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [CommonModule,HttpClientModule,MatButtonModule,MatCheckboxModule,MatInputModule,MatIconModule],
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit{
  data:any[]=[];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.post(this.datasource,{}).subscribe(result=>{
      this.data = result as any[];
    });
  }

  @Input() datasource:string='';
  @Input() columns:DataGridColumn[]=[];
  @Output() onEdit=new EventEmitter<any>();
  @Output() onDelete=new EventEmitter<any>();
}
