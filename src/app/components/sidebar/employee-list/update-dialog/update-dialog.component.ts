import { Component, OnInit,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private auth:AuthService, private _router: Router,) { }

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
    this.auth.updatingEmployeeService(this.data.elem._id, this.employee1).subscribe((res:any)=>{
      console.log(res)
    },(err:any)=>{
      console.log(err)
    })

  }

}
