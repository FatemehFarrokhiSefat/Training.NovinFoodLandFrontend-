import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [CommonModule,HttpClientModule,MatButtonModule],
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
  @Input() columns:string[]=[];
}
