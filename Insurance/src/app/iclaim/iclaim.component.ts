import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-iclaim',
  templateUrl: './iclaim.component.html',
  styleUrls: ['./iclaim.component.css'],
  providers:[DatePipe]
})
export class IclaimComponent implements OnInit {
  reason:string=''
  email:string=''
  mobile:string=''

  claim:Claim={
    //Id:0,
    ClaimDate:new Date(1000,0,0,0),
    Isapproved:false,
    PolicyId:0
  }

  


  constructor(private claimservice:ClaimService,private router:Router,private activatedroute:ActivatedRoute,private datePipe: DatePipe) { 
  //  this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    const temail=this.activatedroute.snapshot.paramMap.get('email')
    this.email=String(temail)
  }


  submit(c:Claim){
    this.claim=c
    console.log(this.claim)
    
    //let dt  = this.datePipe.transform(this.claim.ClaimDate,'yyyy-MM-dd');
    //console.log(this.claim)
    //this.claim.ClaimDate= new Date(dt);
    this.claimservice.claim(this.claim).subscribe(()=>{
      alert("Ticket Generated") 
      
      this.router.navigate([''])
    })
    
  }
}
