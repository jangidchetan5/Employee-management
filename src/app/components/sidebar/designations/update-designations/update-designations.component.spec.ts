import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDesignationsComponent } from './update-designations.component';

describe('UpdateDesignationsComponent', () => {
  let component: UpdateDesignationsComponent;
  let fixture: ComponentFixture<UpdateDesignationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDesignationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDesignationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
