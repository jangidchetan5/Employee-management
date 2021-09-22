import { Component, OnInit,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


import { HolidayService } from 'src/app/core/services/holiday.service';

@Component({
  selector: 'app-update-holiday-dialog',
  templateUrl: './update-holiday-dialog.component.html',
  styleUrls: ['./update-holiday-dialog.component.css']
})
export class UpdateHolidayDialogComponent implements OnInit {

  constructor(private holidayService:HolidayService,@Inject(MAT_DIALOG_DATA) public data:any,private toaster:ToastrService,private spinner:NgxSpinnerService) { }
  

  loader:boolean=false;
  ngOnInit(): void {
  }

  holiday={
    name:this.data.elem.name,
    day:this.data.elem.day,
    date:this.data.elem.date
  }

  updatingHolidays(myForm1:NgForm){
    this.loader=true;
    this.spinner.show();
    this.holidayService.updatingHolidaysService(this.data.elem._id, this.holiday).subscribe((res:any)=>{
      this.loader=false;
      console.log(res)
      this.toaster.success("Updated successfully","Message",{
        timeOut:3000,
       
        progressBar:true,
        progressAnimation:'increasing',
      
       
      });
    },(err:any)=>{
      this.loader=false;
      console.log(err)
      this.toaster.error("Something went wrong","Error",{
        timeOut:1000,
       
        progressBar:true,
        progressAnimation:'increasing',
        

       
      })
    })
  }

}
