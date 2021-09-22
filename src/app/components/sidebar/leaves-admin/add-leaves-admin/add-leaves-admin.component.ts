import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { LeaveAdminService } from 'src/app/core/services/leave-admin.service';


@Component({
  selector: 'app-add-leaves-admin',
  templateUrl: './add-leaves-admin.component.html',
  styleUrls: ['./add-leaves-admin.component.css']
})
export class AddLeavesAdminComponent implements OnInit {

  constructor(private auth:AuthService,private leavesAdmin:LeaveAdminService) { }
  arr1:any=[];

  ngOnInit(): void {
    this.auth.getAllEmployeeService().subscribe((res:any)=>{
      console.log(res)
      this.arr1=res;
    },(err:any)=>{
      console.log(err)
    })
  }

  Leaves={
    name:'',
    leavetype:'',
    from:'',
    to:'',
    noofdays:'',
    reason:'',
    status:''
  }

  addLeaves(){
    // console.log(this.Leaves)
    this.leavesAdmin.creatingLeaves(this.Leaves).subscribe((res:any)=>{
      console.log(res)
    },(err:any)=>{
      console.log(err)
    })
  }

}
