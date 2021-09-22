import { TestBed } from '@angular/core/testing';

import { LeaveAdminService } from './leave-admin.service';

describe('LeaveAdminService', () => {
  let service: LeaveAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
