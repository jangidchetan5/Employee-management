import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { TimesheetService } from 'src/app/core/services/timesheet.service';

@Component({
  selector: 'app-addtodaywork',
  templateUrl: './addtodaywork.component.html',
  styleUrls: ['./addtodaywork.component.css']
})
export class AddtodayworkComponent implements OnInit {
  loader:boolean=false;

  Employee={
    employeename:'',
    date:'',
    projects:'',
    assignedhours:'',
    hours:'',
    description:''

  }
  arr1:any=[]

  constructor(private auth:AuthService,private timesheet:TimesheetService,private toaster:ToastrService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.auth.getAllEmployeeService().subscribe((res:any)=>{
      console.log(res);
      this.arr1=res;
    },(err:any)=>{
      console.log(err)
    })
  }

  addingTodayWork(){
    // console.log(this.Employee)
    this.loader = true;
    this.spinner.show();
    this.timesheet.creatingTodayWork(this.Employee).subscribe((res: any) => {
      this.loader = false;
      console.log(res)
      this.toaster.success("Added successfully", "Message", {
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
