import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';

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

  constructor(private service1: AuthService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllEmployee();

  }

  getAllEmployee() {
    this.service1.getAllEmployeeService().subscribe((res: any) => {
      console.log('chetan_response', res)
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
      this.service1.deletingEmployeeService(id).subscribe((res: any) => {
        console.log(res)
        this.getAllEmployee();
      }, (err: any) => {
        console.log(err)
      })

    } else {
      return;
    }


  }

  openDialogForAdd() {
    this.dialog.open(AddDialogComponent)

  }

}
