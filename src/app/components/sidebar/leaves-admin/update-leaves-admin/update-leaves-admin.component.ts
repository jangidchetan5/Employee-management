import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { LeaveAdminService } from 'src/app/core/services/leave-admin.service';


@Component({
  selector: 'app-update-leaves-admin',
  templateUrl: './update-leaves-admin.component.html',
  styleUrls: ['./update-leaves-admin.component.css']
})
export class UpdateLeavesAdminComponent implements OnInit {

  constructor(private leavesAdmin: LeaveAdminService, @Inject(MAT_DIALOG_DATA) public data: any, private toaster: ToastrService, private spinner: NgxSpinnerService, private auth: AuthService) { }
  arr1: any = []

  loader: boolean = false;
  ngOnInit(): void {
    this.auth.getAllEmployeeService().subscribe((res: any) => {
      console.log(res)
      this.arr1 = res;
    }, (err: any) => {
      console.log(err)
    })
  }

  Leaves = {
    name: this.data.elem.name,
    leavetype: this.data.elem.leavetype,
    from: this.data.elem.from,
    to: this.data.elem.to,
    noofdays: this.data.elem.noofdays,
    reason: this.data.elem.reason,
    status: this.data.elem.status

  }

  updatingLeavesAdmin(myForm1: NgForm) {
    this.loader = true;
    this.spinner.show();
    this.leavesAdmin.updatingLeavesAdminsService(this.data.elem._id, this.Leaves).subscribe((res: any) => {
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
