import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
 

  loader:boolean=false;
  constructor(private auth: AuthService,private toaster:ToastrService,private spinner:NgxSpinnerService) { }

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
    this.loader=true;
    this.spinner.show();
   
    this.auth.adminAddingEmployee(this.employee1).subscribe((res:any)=>{
      console.log(res)
      this.loader=false;
      this.toaster.success("Added Successfully","Message",{
        timeOut:3000,
       
        progressBar:true,
        progressAnimation:'increasing',
      
       
      });
    },(err:any)=>{
      console.log(err)
      this.loader=false;
      this.toaster.error("Something Went Wrong","Error",{
        timeOut:1000,
       
        progressBar:true,
        progressAnimation:'increasing',
        

       
      })
    })

  }

}
