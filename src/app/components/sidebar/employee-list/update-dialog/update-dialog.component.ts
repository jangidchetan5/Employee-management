import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private auth: AuthService, private _router: Router, private toaster: ToastrService, private spinner: NgxSpinnerService) { }

  loader: boolean = false;
  ngOnInit(): void {
  }

  // employee1={
  //   firstName:this.data.elem.firstName,
  //   lastName:this.data.elem.lastName,
  //   email:this.data.elem.email,
  //   phone:this.data.elem.phone,
  //   areaOfWork:this.data.elem.areaOfWork,
  //   role:this.data.elem.role
  // }


  allowed_types: string[] = ['image/jpg', 'image/png', 'image/jpeg'];

  // selectedFile=null;


  addingImg(event: any) {

    const file = event.target.files[0];
    if (file) {
      if (file.size / 1000000 > 1) {

        //more than 1 mb is not allowed
        return this.toaster.warning("File Type is too large", "Warning")
      }
      if (!this.allowed_types.includes(file.type)) {
        //not allowed type except jpg , png, jpeg
        return this.toaster.warning("File type is not allowed", "Warning")

      }
      this.toaster.success("uploaded successfully", "Message")
      return this.employee1.profile_image = file;


    }




  }

  employee1 = {
    firstName: this.data.elem.firstName,
    lastName: this.data.elem.lastName,
    email: this.data.elem.email,
    // password: this.data.elem.password,
    // confirmPassword: this.data.elem.confirmPassword,
    joiningdate: this.data.elem.joiningdate,
    phone: this.data.elem.phone,
    company: this.data.elem.company,
    department: this.data.elem.department,
    designation: this.data.elem.designation,
    birthday: this.data.elem.birthday,
    gender: this.data.elem.gender,
    address: this.data.elem.address,
    profile_image: this.data.elem.profile_image,
    bankname: this.data.elem.bankname,
    accountno: this.data.elem.accountno,
    ifsc: this.data.elem.ifsc,
    pan: this.data.elem.pan,
    institution: this.data.elem.institution,
    stream: this.data.elem.stream,
    startingdate: this.data.elem.startingdate,
    completedate: this.data.elem.completedate,
    pastcompanyname: this.data.elem.pastcompanyname,
    location: this.data.elem.location,
    jobposition: this.data.elem.jobposition,
    pastCompanyFrom: this.data.elem.pastCompanyFrom,
    pastCompanyTo: this.data.elem.pastCompanyTo,

  }

  updatingEmployee(myForm: NgForm) {
    this.loader = true;
    this.spinner.show()
    console.log('update_chetan', this.employee1)

    //FormData 
    const formData = new FormData();
    formData.append('firstName', this.employee1.firstName)
    formData.append('lastName', this.employee1.lastName)
    formData.append('email', this.employee1.email)
    formData.append('joiningdate', this.employee1.joiningdate)
    formData.append('phone', this.employee1.phone)
    formData.append('company', this.employee1.company)
    formData.append('department', this.employee1.department)
    formData.append('designation', this.employee1.designation)
    formData.append('birthday', this.employee1.birthday)
    formData.append('gender', this.employee1.gender)
    formData.append('address', this.employee1.address)
    formData.append('profile_image', this.employee1.profile_image)
    formData.append('bankname', this.employee1.bankname)
    formData.append('accountno', this.employee1.accountno)
    formData.append('ifsc', this.employee1.ifsc)
    formData.append('pan', this.employee1.pan)
    formData.append('institution', this.employee1.institution)
    formData.append('stream', this.employee1.stream)
    formData.append('startingdate', this.employee1.startingdate)
    formData.append('completedate', this.employee1.completedate)
    formData.append('pastcompanyname', this.employee1.pastcompanyname)
    formData.append('location', this.employee1.location)
    formData.append('jobposition', this.employee1.jobposition)
    formData.append('pastCompanyFrom', this.employee1.pastCompanyFrom)
    formData.append('pastCompanyTo', this.employee1.pastCompanyTo)

    this.auth.updatingEmployeeService(this.data.elem._id, formData).subscribe((res: any) => {

      this.loader = false;
      console.log(res)
      this.toaster.success("Updated  successfully", "Message", {
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
