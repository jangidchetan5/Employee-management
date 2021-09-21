import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
 


  constructor(private auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  employee1 = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    areaOfWork: '',
    role:'',
   
    password:'',
    confirmPassword:''
  }

  addingEmployee123(){
    // console.log(this.employee1)
    this.auth.adminAddingEmployee(this.employee1).subscribe((res:any)=>{
      console.log(res)
    },(err:any)=>{
      console.log(err)
    })

  }

}
