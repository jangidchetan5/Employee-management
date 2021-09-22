import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeavesAdminComponent } from './add-leaves-admin.component';

describe('AddLeavesAdminComponent', () => {
  let component: AddLeavesAdminComponent;
  let fixture: ComponentFixture<AddLeavesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLeavesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeavesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
