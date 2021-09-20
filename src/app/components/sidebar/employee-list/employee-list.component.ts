import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';

export interface PeriodicElement {
  firstName: string;
  email: string;
  phone: number;
  
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { firstname: 'Hydrogen', email:'test@gmail.com',phone:123456},
//   { firstname: 'Helium', email:'test@gmail.com' ,phone:123456},
//   { firstname: 'Lithium', email:'test@gmail.com',phone:123456},
//   { firstname: 'Beryllium', email:'test@gmail.com' ,phone:123456},
//   { firstname: 'Boron', email:'test@gmail.com',phone:123456},
//   { firstname: 'Carbon', email:'test@gmail.com' ,phone:123456},
//   { firstname: 'Nitrogen', email:'test@gmail.com' ,phone:123456},
//   { firstname: 'Oxygen', email:'test@gmail.com' ,phone:123456},
//   { firstname: 'Fluorine', email:'test@gmail.com' ,phone:123456},
//   { firstname: 'Neon' ,email:'test@gmail.com'  ,phone:123456},
// ];


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'email', 'phone', 'update','delete'];
  // dataSource = ELEMENT_DATA;
  ELEMENT_DATA: PeriodicElement[]=[]
  dataSource:any;

  constructor(private service1:AuthService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.service1.getAllEmployeeService().subscribe((res:any)=>{
      console.log('chetan_response',res)
      this.ELEMENT_DATA = res;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      // console.log('hahaha123456',this.ELEMENT_DATA)
     
    },(err:any)=>{
      console.log('chetan_error',err)
    })
  }

  openDialog(elem:any){
    // console.log("123")
    this.dialog.open(UpdateDialogComponent,{data:{elem}})
  }

}
