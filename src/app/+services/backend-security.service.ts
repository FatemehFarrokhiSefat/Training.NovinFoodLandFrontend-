import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackendSecurityService extends  BackendService{
  signin(username:string,password:string){
    return this.http.post(this.securityAPI+'signin',{username:username,password:password})
  }
  adminsignin(username:string,password:string){
    return this.http.post(this.securityAPI+'adminsignin',{username:username,password:password})
  }
  signup(username:string,password:string,type:number,fullname:string,email:string){
    return this.http.post(this.securityAPI+'signup',{
      username:username,
      password:password,
      type:type,
      fullname:fullname,
      email:email
    }).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if(error.status===500){
      return throwError(() => new Error(error.error.error));
    }
    return "ok";
    // if (error.status === 0) {
    //   // A client-side or network error occurred. Handle it accordingly.
    //   console.error('An error occurred:', error.error);
    // } else {
    //   // The backend returned an unsuccessful response code.
    //   // The response body may contain clues as to what went wrong.
    //   console.error(
    //     `Backend returned code ${error.status}, body was: `, error.error);
    // }
    // // Return an observable with a user-facing error message.
    // return throwError(() => new Error('Something bad happened; please try again later.'));
  }
} 
