import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';


export interface PeriodicElement {
  firstName: string,
  lastName: string,
  email: string,
  phone: number,
  areaOfWork: string,
  role: string



}




@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone', 'areaOfWork', 'role', 'action'];

  ELEMENT_DATA: PeriodicElement[] = []
  dataSource: any;
  

  constructor(private service1: AuthService, public dialog: MatDialog,private toaster:ToastrService,private spinner:NgxSpinnerService) { 
    
  }
  loader:boolean=false;
  ngOnInit(): void {
     
    this.getAllEmployee();
   
    

  }

  getAllEmployee() {
    this.service1.getAllEmployeeService().subscribe((res: any) => {
      console.log('chetan_response', res)
      this.dataSource=res;
      this.ELEMENT_DATA = res;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);


    }, (err: any) => {
      console.log('chetan_error', err)
    })
  }

  openDialog(elem: any) {

    this.dialog.open(UpdateDialogComponent, { data: { elem }, disableClose: true })
  }

  deletingEmployee(id: any) {

    let a = confirm("Click on 'OK' to delete ,else Click on 'Cancel' ")

    if (a) {
      this.loader=true;
      this.spinner.show();
      this.service1.deletingEmployeeService(id).subscribe((res: any) => {
        console.log(res)
        this.loader=false;
        this.toaster.success("Deleted Successfully","Message",{
          timeOut:3000,
         
          progressBar:true,
          progressAnimation:'increasing',
        
         
        });
       
        this.getAllEmployee();
      }, (err: any) => {
        this.loader=false;
        console.log(err)
        this.toaster.error("Something Went Wrong","Error",{
          timeOut:1000,
         
          progressBar:true,
          progressAnimation:'increasing',
          
  
         
        })
      })

    } else {
      return;
    }


  }

  openDialogForAdd() {
    this.dialog.open(AddDialogComponent)

  }

  applyFilter(event:any){
    this.dataSource.filter=event.target.value.trim().toLowerCase();

  }

}
