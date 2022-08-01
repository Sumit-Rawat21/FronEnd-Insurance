import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) export class LoginComponent implements OnInit {

  mail:string=''
  password:string=''
  constructor(private router:Router,private cs:CustomerService) { }

  ngOnInit(): void {
  }
  login(email:string,pass:string){
    this.mail=email
    this.password=pass
    if(this.mail=='admin' && this.password=='admin')
    this.router.navigate(['admin']);
    else{
      
      
      console.log(this.mail+" "+this.password)
    this.cs.userlogin(this.mail,this.password).subscribe(()=>{
      alert("Hi!!")
    this.router.navigate(['user/',this.mail])
  })
    }
  }
}