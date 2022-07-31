import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url='http://localhost:27523/api/Customer/'
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
    constructor(private httpclient:HttpClient) { }

    registerUser(customer:Customer):Observable<Customer>{
      return this.httpclient.post<Customer>(this.url+"Register",customer,this.httpOptions).pipe(catchError(this.handleError));
    }
    userlogin(email:string,pass:string):Observable<Customer>{
      return this.httpclient.get<Customer>(this.url+"Login/"+email+'/'+pass,this.httpOptions).pipe(catchError(this.handleError))
    }
    getUser(email:string):Observable<Customer>{
      return this.httpclient.get<Customer>(this.url+"Get/"+email).pipe(catchError(this.handleError))
    }
    // editUser(customer:Customer):Observable<Customer>{
    //   return this.httpclient.put<Customer>(this.url+"resetpass/"+customer.email,customer,this.httpOptions)
    // }
    handleError(error:HttpErrorResponse){
      let errorMessage='';
      errorMessage=error.status+'\n'+error.statusText+'\n'+error.error;
      alert(errorMessage);
      return throwError(errorMessage)
    }
}
