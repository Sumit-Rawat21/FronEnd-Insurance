import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Iplan } from './iplan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  url:string="http://localhost:5000/api/Customer/BuyInsurance/"
  urlrenew:string="http://localhost:5000/api/Customer/RenewInsurance/"
  urlcalc:string="http://localhost:5000/api/Customer/Calc/"
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
  constructor(private httpClient:HttpClient) { }

   GetPlan(regno:string,type:string,duration:number):Observable<Iplan>{
    console.log(duration)
     console.log(regno)
     console.log(type)
     return this.httpClient.get<Iplan>(this.url+regno+'/'+type+'/'+duration,this.httpOptions).pipe(catchError(this.HandleError))
   }

   addpolicy(plan:Iplan,email:string,regno:string):Observable<Iplan>{
    return this.httpClient.post<Iplan>(this.url+'addpolicy/'+email+'/'+regno+'',plan,this.httpOptions).pipe(catchError(this.HandleError))
  }

  GetPlanRenew(policyId:number,type:string,duration:number):Observable<Iplan>{
    return this.httpClient.get<Iplan>(this.urlrenew+policyId+'/'+type+'/'+duration,this.httpOptions).pipe(catchError(this.HandleError))
  }

  addpolicyRenew(plan:Iplan,policyId:number):Observable<Iplan>{
    return this.httpClient.post<Iplan>(this.urlrenew+policyId,plan,this.httpOptions).pipe(catchError(this.HandleError))
  }

  GetPlanCalc(typeofvehicle:string,type:string,duration:number):Observable<Iplan>{
    return this.httpClient.get<Iplan>(this.urlcalc+typeofvehicle+'/'+type+'/'+duration,this.httpOptions).pipe(catchError(this.HandleError))
  }

  HandleError(error:HttpErrorResponse){
    let errormessage=''
    errormessage=error.status+'\n'+error.statusText+error.error;
    alert(errormessage)
   return throwError(errormessage)
  }
}
