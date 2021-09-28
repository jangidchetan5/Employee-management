import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {


  loader: boolean = false;
  constructor(private auth: AuthService, private toaster: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  employee1 = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    joiningdate: '',
    phone: '',
    company: '',
    department: '',
    designation: '',
    birthday: '',
    gender: '',
    address: '',
    profile_image: '',
    bankname: '',
    accountno: '',
    ifsc: '',
    pan: '',
    institution: '',
    stream: '',
    startingdate: '',
    completedate: '',
    pastcompanyname: '',
    location: '',
    jobposition: '',
    pastCompanyFrom: '',
    pastCompanyTo: '',
   
  }

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


  addingEmployee123() {
    console.log('chetan_jangid12345',this.employee1)
    this.loader = true;
    this.spinner.show();
    const formData=new FormData();
    formData.append('firstName', this.employee1.firstName)
    formData.append('lastName', this.employee1.lastName)
    formData.append('email', this.employee1.email)
    formData.append('password', this.employee1.password)
    formData.append('confirmPassword', this.employee1.confirmPassword)
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
    

    this.auth.adminAddingEmployee(formData).subscribe((res: any) => {
      console.log(res)
      this.loader = false;
      this.toaster.success("Added Successfully", "Message", {
        timeOut: 3000,

        progressBar: true,
        progressAnimation: 'increasing',


      });
    }, (err: any) => {
      console.log(err)
      this.loader = false;
      this.toaster.error("Something Went Wrong", "Error", {
        timeOut: 1000,

        progressBar: true,
        progressAnimation: 'increasing',



      })
    })

  }

}
