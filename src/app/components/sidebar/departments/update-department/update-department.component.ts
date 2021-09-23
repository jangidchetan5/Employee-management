import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/core/services/department.service';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {
  loader: boolean = false;

  Department = {
    number: this.data.elem.number,
    departmentname: this.data.elem.departmentname
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private toaster: ToastrService, private spinner: NgxSpinnerService, private department: DepartmentService) { }

  ngOnInit(): void {
  }

  updatingDepartment(myForm: NgForm) {
    this.loader = true;
    this.spinner.show();
    this.department.updatingDepartmentService(this.data.elem._id, this.Department).subscribe((res: any) => {
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
      this.toaster.error("Something went wrong", "Error", {
        timeOut: 1000,

        progressBar: true,
        progressAnimation: 'increasing',



      })
    })

  }


}
