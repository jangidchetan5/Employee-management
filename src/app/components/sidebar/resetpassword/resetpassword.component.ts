import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ResetPasswordService } from 'src/app/core/services/reset-password.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {


  constructor(private resetPassword:ResetPasswordService,private toaster:ToastrService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
   
  }

  loader:boolean=false

  admin={
    _id:localStorage.getItem('id'),
    oldPassword:'',
    newPassword:''
  }

  resetingPassword(){
    // console.log(this.admin)
    this.loader = true;
    this.spinner.show()
    this.resetPassword.resetingPasswordService(this.admin).subscribe((res: any) => {

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
