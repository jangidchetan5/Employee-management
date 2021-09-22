import { Component, OnInit,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


import { HolidayService } from 'src/app/core/services/holiday.service';

@Component({
  selector: 'app-update-holiday-dialog',
  templateUrl: './update-holiday-dialog.component.html',
  styleUrls: ['./update-holiday-dialog.component.css']
})
export class UpdateHolidayDialogComponent implements OnInit {

  constructor(private holidayService:HolidayService,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

  holiday={
    name:this.data.elem.name,
    day:this.data.elem.day,
    date:this.data.elem.date
  }

  updatingHolidays(myForm1:NgForm){
    this.holidayService.updatingHolidaysService(this.data.elem._id, this.holiday).subscribe((res:any)=>{
      console.log(res)
    },(err:any)=>{
      console.log(err)
    })
  }

}
