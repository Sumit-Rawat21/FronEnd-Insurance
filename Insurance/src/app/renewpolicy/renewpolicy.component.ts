import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PlanService } from '../plan.service';
import { Iplan } from '../iplan';

@Component({
  selector: 'app-renewpolicy',
  templateUrl: './renewpolicy.component.html',
  styleUrls: ['./renewpolicy.component.css']
})
export class RenewpolicyComponent implements OnInit {
  plandata:Iplan={
    id:0,
    type:'',
    amount:0.00,
    typeofvehicle:'',
    term:0
  }
  policyId:number=0
  type:string=''
  term:number=0
  constructor(private router:Router,private activateroute:ActivatedRoute, private planService:PlanService) { }

  ngOnInit(): void {
    const ttype=this.activateroute.snapshot.paramMap.get('type')
    const tduration=this.activateroute.snapshot.paramMap.get('term')
    const tpolicyId=this.activateroute.snapshot.paramMap.get('policyId')
    this.policyId=Number(tpolicyId)
    this.type=String(ttype)
    this.term=Number(tduration)
    this.planService.GetPlanRenew(this.policyId,this.type,this.term).subscribe((data:Iplan)=>{this.plandata=data})
     console.log(this.plandata)
  }
  addPolicyRenew(){
    console.log("addpolicy started");
   this.planService.addpolicyRenew(this.plandata,this.policyId).subscribe(()=>{
    alert("Thank you For Renewing Insurance \n you details are saved safely!!!")
    this.router.navigate(['/'])  
   })
  }

}