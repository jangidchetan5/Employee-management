import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeserviceService } from '../employeeservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employeeData={
    emailaddress:'',
    password:''
  }
  loader: boolean = false;
  constructor(private employee1:EmployeeserviceService,private toaster:ToastrService,private _router:Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  login(myForm:NgForm){
    // console.log(this.employeeData)
    this.loader=true;
    this.spinner.show();
    this.employee1.loginService(this.employeeData).subscribe((res:any)=>{
      this.loader=false;
      console.log(res)
      this.toaster.success("Loggedin successfully","Message",{
        timeOut:3000,
       
        progressBar:true,
        progressAnimation:'increasing',
      
       
      });
      localStorage.setItem('token',res.token);
      this._router.navigate(['/sidenav'])
    },(err:any)=>{
      this.loader=false;
      console.log(err)
      this.toaster.error(err.message,"Error",{
        timeOut:1000,
       
        progressBar:true,
        progressAnimation:'increasing',
        

       
      })
    })


  }

}
