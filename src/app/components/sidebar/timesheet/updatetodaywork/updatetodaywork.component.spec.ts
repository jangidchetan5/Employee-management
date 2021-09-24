import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetodayworkComponent } from './updatetodaywork.component';

describe('UpdatetodayworkComponent', () => {
  let component: UpdatetodayworkComponent;
  let fixture: ComponentFixture<UpdatetodayworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetodayworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetodayworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
