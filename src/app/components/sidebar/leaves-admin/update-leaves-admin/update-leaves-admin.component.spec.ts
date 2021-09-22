import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeavesAdminComponent } from './update-leaves-admin.component';

describe('UpdateLeavesAdminComponent', () => {
  let component: UpdateLeavesAdminComponent;
  let fixture: ComponentFixture<UpdateLeavesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLeavesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLeavesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
