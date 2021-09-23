import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/core/services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  Department = {
    number: '',
    departmentname: ''
  }
  loader: boolean = false

  constructor(private toaster: ToastrService, private spinner: NgxSpinnerService, private department: DepartmentService) { }

  ngOnInit(): void {
  }

  addDepartment() {
    // console.log(this.Department)
    this.loader = true;
    this.spinner.show();
    this.department.creatingDepartment(this.Department).subscribe((res: any) => {
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
