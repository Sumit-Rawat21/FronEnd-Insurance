import { Component, OnInit } from '@angular/core';
import { IclaimPolicy } from '../iclaim-policy';
import { ClaimPolicyService } from '../claim-policy.service';
import { ClaimService } from '../claim.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  cpsObj:IclaimPolicy[] = []
  tempId:number= 0
  constructor(private cps:ClaimPolicyService,private cs:ClaimService,private router:Router) {

   }

  ngOnInit(): void {
    this.cps.getClaimPolicy().subscribe(data=>{
      this.cpsObj = data;
    })
  }

  edit(objId:number){
//    obj.isapproved = this.isApproved;
    this.tempId = objId;
    this.cs.edit(this.tempId).subscribe(()=>{
      alert("Claim Approved....");
      this.router.navigate(['admin']).then(() => {
        window.location.reload();
      });
    })
  }

}
