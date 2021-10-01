import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/core/services/department.service';
import { DesignationsService } from 'src/app/core/services/designations.service';

@Component({
  selector: 'app-update-designations',
  templateUrl: './update-designations.component.html',
  styleUrls: ['./update-designations.component.css']
})
export class UpdateDesignationsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private toaster: ToastrService, private spinner: NgxSpinnerService, private department: DepartmentService, private designation: DesignationsService) { }

  arr1: any = []
  ngOnInit(): void {
    this.department.getAllDepartmentService().subscribe((res: any) => {
      console.log(res)
      this.arr1 = res.data
    }, (err: any) => {
      console.log(err)
    })
  }
  loader: boolean = false;

  Designation = {
    number: this.data.elem.number,
    designationsname: this.data.elem.designationsname,
    departmentname: this.data.elem.departmentname
  }

  updatingDesignations(myForm1: any) {
    // console.log(this.Designation)
    this.loader = true;
    this.spinner.show();
    this.designation.updatingDesignationsService(this.data.elem._id, this.Designation).subscribe((res: any) => {
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
