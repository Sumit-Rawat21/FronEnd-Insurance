import { TestBed } from '@angular/core/testing';

import { CustomerVehiclePolicyService } from './customer-vehicle-policy.service';

describe('CustomerVehiclePolicyService', () => {
  let service: CustomerVehiclePolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerVehiclePolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
