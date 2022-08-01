import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CustomerVehiclePolicy } from '../customer-vehicle-policy';
import { CustomerVehiclePolicyService } from '../customer-vehicle-policy.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  email:string=''
  customer_vehicle_policy:CustomerVehiclePolicy[] = []
  renew_amount:number = 0;
  render_b:boolean = true;
  constructor(private router:Router,private activateroute:ActivatedRoute,private cvp:CustomerVehiclePolicyService) {

   }

  ngOnInit(): void {
    const temail=this.activateroute.snapshot.paramMap.get('email')

    
  this.email=String(temail)
  this.cvp.getDetails(this.email).subscribe(data => {
    this.customer_vehicle_policy = data;
    this.renew_amount = this.customer_vehicle_policy[0].renewAmount;
    if(this.renew_amount > 0){
      this.render_b = true;
    }
    else{
      this.render_b = false;
    }
    console.log(this.customer_vehicle_policy)
  }
  
  )
    
  }
   claim(){
    this.router.navigate(['Iclaim']);
   }
   renew(){
    this.router.navigateByUrl('Irenew');
   }
}
