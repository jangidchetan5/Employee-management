import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtodayworkComponent } from './addtodaywork.component';

describe('AddtodayworkComponent', () => {
  let component: AddtodayworkComponent;
  let fixture: ComponentFixture<AddtodayworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtodayworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtodayworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
