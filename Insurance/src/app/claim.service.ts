import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Claim } from './claim';
import { IclaimPolicy } from './iclaim-policy';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  url='http://localhost:5000/api/Claim/'
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
    constructor(private httpclient:HttpClient) { }

  claim(c:Claim):Observable<Claim>{
    return this.httpclient.post<Claim>(this.url+"Add",c,this.httpOptions).pipe(catchError(this.handleError));
  }
  ///objMessage -> Message : string -> newObj = new objM..() -> newOnj.Message = "" -> Ok(newObj)

  edit(claimId:number):Observable<Claim>{
    return this.httpclient.delete<Claim>(this.url + "Edit/"+claimId,this.httpOptions).pipe(catchError(this.handleError));
  }
  
  handleError(error:HttpErrorResponse){
    let errorMessage='';
    errorMessage=error.status+'\n'+error.statusText+'\n'+error.error;
    alert(errorMessage);
    return throwError(errorMessage)
  }

}