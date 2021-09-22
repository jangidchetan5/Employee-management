import { Component, OnInit,Inject } from '@angular/core';
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

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private auth:AuthService, private _router: Router,private toaster:ToastrService,private spinner:NgxSpinnerService) { }
  
  loader:boolean=false;
  ngOnInit(): void {
  }

  employee1={
    firstName:this.data.elem.firstName,
    lastName:this.data.elem.lastName,
    email:this.data.elem.email,
    phone:this.data.elem.phone,
    areaOfWork:this.data.elem.areaOfWork,
    role:this.data.elem.role
  }

  updatingEmployee(myForm:NgForm){
    this.loader=true;
    this.spinner.show()
    this.auth.updatingEmployeeService(this.data.elem._id, this.employee1).subscribe((res:any)=>{
     
      this.loader=false;
      console.log(res)
      this.toaster.success("Updated  successfully","Message",{
        timeOut:3000,
       
        progressBar:true,
        progressAnimation:'increasing',
      
       
      });
    },(err:any)=>{
     
      this.loader=false;
      console.log(err)
      this.toaster.error('Something went wrong',"Error",{
        timeOut:1000,
       
        progressBar:true,
        progressAnimation:'increasing',
        

       
      })
    })

  }

}
