import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  securityAPI='https://localhost:7088/';
  constructor(public http:HttpClient) { }
}
