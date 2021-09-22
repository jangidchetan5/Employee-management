import { Component, OnInit,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeaveAdminService } from 'src/app/core/services/leave-admin.service';


@Component({
  selector: 'app-update-leaves-admin',
  templateUrl: './update-leaves-admin.component.html',
  styleUrls: ['./update-leaves-admin.component.css']
})
export class UpdateLeavesAdminComponent implements OnInit {

  constructor(private leavesAdmin:LeaveAdminService,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

  Leaves={
    name:this.data.elem.name,
    leavetype:this.data.elem.leavetype,
    from:this.data.elem.from,
    to:this.data.elem.to,
    noofdays:this.data.elem.noofdays,
    reason:this.data.elem.reason,
    status:this.data.elem.status

  }

  updatingLeavesAdmin(myForm1:NgForm){
    // console.log("hello");
    this.leavesAdmin.updatingLeavesAdminsService(this.data.elem._id, this.Leaves).subscribe((res:any)=>{
      console.log(res)
    },(err:any)=>{
      console.log(err)
    })

  }



}
