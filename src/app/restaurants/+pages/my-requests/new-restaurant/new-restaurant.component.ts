import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent {
  titleFormControl = new FormControl('', [Validators.required]);
  addressFormControl = new FormControl('', [Validators.required]);
}
