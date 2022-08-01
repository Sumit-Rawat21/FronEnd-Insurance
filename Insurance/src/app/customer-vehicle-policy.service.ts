import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerVehiclePolicyService {
  url='http://localhost:5000/api/Customer/'
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
    constructor(private httpclient:HttpClient) { }
  getDetails(email:string):Observable<any>{
    return this.httpclient.get<any[]>(this.url+'GetCustomerVehiclePolicy/'+email)
  }
 }
