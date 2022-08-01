import { Injectable } from '@angular/core';
import { Observable,catchError,throwError } from 'rxjs';
import { Policy } from './policy';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  url='http://localhost:5000/api/Policy/'
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
    constructor(private httpclient:HttpClient) { }
    getPolicies():Observable<Policy>{
      return this.httpclient.get<Policy>(this.url+'GetPolicies')
    }
    getPolicy(user_id:number):Observable<Policy>{
      return this.httpclient.get<Policy>(this.url+'Get/'+user_id).pipe(catchError(this.handleError))
    }
    /*
    editPolicy(policy:Policy):Observable<Policy>{
      return this.httpclient.put<Policy>(this.url+'edit/'+policy.id,policy,this.httpOptions).pipe(catchError(this.handleError))
    }*/

    handleError(error:HttpErrorResponse){
      let errorMessage='';
      errorMessage=error.status+'\n'+error.statusText+'\n'+error.error;
      alert(errorMessage);
      return throwError(errorMessage)
    }  
}