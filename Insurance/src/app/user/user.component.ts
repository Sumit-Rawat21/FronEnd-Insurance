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
  constructor(private router:Router,private activateroute:ActivatedRoute,private cvp:CustomerVehiclePolicyService) {

   }

  ngOnInit(): void {
    const temail=this.activateroute.snapshot.paramMap.get('email')

    
  this.email=String(temail)
  this.cvp.getDetails(this.email).subscribe(data => {
    this.customer_vehicle_policy = data;
  }
  
  )
    
  }
   claim(){
    this.router.navigate(['Iclaim/',this.email]);
   }
   renew(){
    this.router.navigateByUrl('Irenew');
   }
}
