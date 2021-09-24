import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { LeaveAdminService } from 'src/app/core/services/leave-admin.service';


@Component({
  selector: 'app-add-leaves-admin',
  templateUrl: './add-leaves-admin.component.html',
  styleUrls: ['./add-leaves-admin.component.css']
})
export class AddLeavesAdminComponent implements OnInit {

  constructor(private auth: AuthService, private leavesAdmin: LeaveAdminService, private spinner: NgxSpinnerService, private toaster: ToastrService) { }
  arr1: any = [];
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
    name: '',
    leavetype: '',
    from: '',
    to: '',
    noofdays: '',
    reason: '',
    status: ''
  }

  addLeaves() {
    this.loader = true;
    this.spinner.show();
    this.leavesAdmin.creatingLeaves(this.Leaves).subscribe((res: any) => {
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
