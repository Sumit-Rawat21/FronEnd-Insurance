import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { IclaimPolicy } from './iclaim-policy';

@Injectable({
  providedIn: 'root'
})
export class ClaimPolicyService {

  url='http://localhost:5000/api/Customer/'
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
  constructor(private httpclient:HttpClient) {

   }

   getClaimPolicy():Observable<any>{
    return this.httpclient.get<IclaimPolicy[]>(this.url + 'GetClaimPolicy').pipe(catchError(this.handleError));
   }

   handleError(error:HttpErrorResponse){
    let errorMessage='';
    errorMessage=error.status+'\n'+error.statusText+'\n'+error.error;
    alert(errorMessage);
    return throwError(errorMessage)
  }
 
}
