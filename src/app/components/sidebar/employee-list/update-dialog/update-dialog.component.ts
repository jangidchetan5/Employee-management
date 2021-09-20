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
    email:this.data.elem.email,
    phone:this.data.elem.phone
  }

}
