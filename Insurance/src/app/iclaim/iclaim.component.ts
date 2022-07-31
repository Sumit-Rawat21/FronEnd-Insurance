import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-iclaim',
  templateUrl: './iclaim.component.html',
  styleUrls: ['./iclaim.component.css']
})
export class IclaimComponent implements OnInit {
  reason:string=''
  email:string=''
  mobile:number=0

  claim:Claim={
    Id:0,
    ClaimDate:new Date(1000, 0, 0, 0),
    Isapproved:false,
    PolicyId:0
  }

  constructor(private claimservice:ClaimService,private router:Router,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    const temail=this.activatedroute.snapshot.paramMap.get('email')
    this.email=String(temail)
  }


  submit(c:Claim){
    this.claim=c
    this.claimservice.claim(this.claim).subscribe(()=>{
      alert("Ticket Generated")
      this.router.navigate(['user/',this.email])
    })
    
  }
}
