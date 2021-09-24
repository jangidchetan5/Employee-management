import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { TimesheetService } from 'src/app/core/services/timesheet.service';

@Component({
  selector: 'app-updatetodaywork',
  templateUrl: './updatetodaywork.component.html',
  styleUrls: ['./updatetodaywork.component.css']
})
export class UpdatetodayworkComponent implements OnInit {
  loader:boolean=false;
  arr1:any=[]

  Employee={
    employeename:this.data.elem.employeename,
    date:this.data.elem.date,
    projects:this.data.elem.projects,
    assignedhours:this.data.elem.assignedhours,
    hours:this.data.elem.hours,
    description:this.data.elem.description
  }

  constructor(private auth:AuthService,@Inject(MAT_DIALOG_DATA) public data:any,private toaster:ToastrService,private spinner:NgxSpinnerService,private timesheet:TimesheetService) { }

  ngOnInit(): void {
    this.auth.getAllEmployeeService().subscribe((res:any)=>{
      console.log(res);
      this.arr1=res;
    },(err:any)=>{
      console.log(err)
    })
  }

 

  updatingTodayWork(myForm1:NgForm){
    this.loader = true;
    this.spinner.show();
    this.timesheet.updatingTodayWorkService(this.data.elem._id, this.Employee).subscribe((res: any) => {
      this.loader = false;
      console.log(res)
      this.toaster.success("Updated successfully", "Message", {
        timeOut: 3000,

        progressBar: true,
        progressAnimation: 'increasing',


      });
    }, (err: any) => {
      this.loader = false;
      console.log(err)
      this.toaster.error('Something went wrong', "Error", {
        timeOut: 1000,

        progressBar: true,
        progressAnimation: 'increasing',



      })
    })

  }

}
