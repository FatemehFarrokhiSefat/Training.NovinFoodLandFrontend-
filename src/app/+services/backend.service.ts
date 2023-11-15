import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  securityAPI:string='http://localhost:5071/';
  restaurantAPI:string='http://localhost:5064/';

  constructor(public http:HttpClient) { }

  mypost(url:string,data:any){
    let headers={};
    if(sessionStorage.getItem('token')){
      headers={'Authorization': 'Bearer '+sessionStorage.getItem('token')};
    }
    return this.http.post(url,data,{headers:headers})
    .pipe(
      catchError(err=>this.handleError(err))
    )
  }

  myget(url:string){
    let headers={};
    if(sessionStorage.getItem('token')){
      headers={'Authorization': 'Bearer '+sessionStorage.getItem('token')};
    }
    return this.http.get(url,{headers:headers})
    .pipe(
      catchError(err=>this.handleError(err))
    )
  }
  handleError(err:any){
      if(err.status==500){
        return of ({serverError:err.error.error});
      }
    return of({serverError:'خطای برقراری ارتباط با سرور'});
  }
}
