import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  timer=interval(2000)
  ngOnInit(): void {
    // this.timer.subscribe(()=>{
    //   console.log('salaaaaaam');
    // });
  }
  // title = 'Foodland';
}
