import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/core/services/department.service';
import { DesignationsService } from 'src/app/core/services/designations.service';

@Component({
  selector: 'app-add-designations',
  templateUrl: './add-designations.component.html',
  styleUrls: ['./add-designations.component.css']
})
export class AddDesignationsComponent implements OnInit {

  constructor(private department:DepartmentService,private toaster:ToastrService,private spinner:NgxSpinnerService,private designations:DesignationsService) { }
  loader:boolean=false;
  arr1:any=[];

  ngOnInit(): void {
    this.department.getAllDepartmentService().subscribe((res:any)=>{
      console.log(res)
      this.arr1=res.data;
    },(err:any)=>{
      console.log(err)
    })
  }

  Designation={
    number:'',
    designationsname:'',
    departmentname:''
  }

  addingDesignation(){
    // console.log(this.Designation)
    this.loader=true;
    this.spinner.show();
    this.designations.creatingDesignations(this.Designation).subscribe((res:any)=>{
      this.loader=false;
      console.log(res)
      this.toaster.success("Added successfully","Message",{
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
