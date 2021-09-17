import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeserviceService } from '../employeeservice.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerEmployeeData={
    firstname:'',
    lastname:'',
    mobilenumber:'',
    emailaddress:'',
    password:'',
    confirmpassword:''


  }
  loader: boolean = false;

  constructor(private employee1:EmployeeserviceService,private toaster:ToastrService,private _router:Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  registeringEmployee(myForm1:NgForm){
    this.loader=true;
    this.spinner.show();
    // console.log(myForm1)
    // console.log(this.registerEmployeeData)
    this.employee1.registeringEmployeeService(this.registerEmployeeData).subscribe((res:any)=>{
      console.log('chetan123456',res)
      this.loader=false;
      this.toaster.success("Registration has been done successfully","Message",{
        timeOut:3000,
       
        progressBar:true,
        progressAnimation:'increasing',
      
       
      });
      localStorage.setItem('token',res.token);
      this._router.navigate(['/sidenav'])
    },(err:any)=>{
      this.loader=false;
      console.log('chetan_error123456',err)
      this.toaster.error(err.message,"Error",{
        timeOut:1000,
       
        progressBar:true,
        progressAnimation:'increasing',
        

       
      })
    })
  }

}
