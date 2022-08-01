import { TestBed } from '@angular/core/testing';

import { ClaimPolicyService } from './claim-policy.service';

describe('ClaimPolicyService', () => {
  let service: ClaimPolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimPolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
