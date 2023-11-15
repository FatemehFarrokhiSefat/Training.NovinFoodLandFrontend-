import { Injectable } from '@angular/core';
import { BackendService } from 'src/app/+services/backend.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService extends BackendService{
  createRequest(title:string,address:string){
    return this.mypost(this.restaurantAPI+'createrequest',{title:title,address:address}); 
  }
}
