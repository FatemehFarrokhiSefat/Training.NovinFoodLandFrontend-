import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  securityAPI='http://localhost:5071/';
  constructor(public http:HttpClient) { }
}
