import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/core/services/department.service';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';

export interface PeriodicElement {
  number: number,
  departmentname: 'string'
}


// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  displayedColumns: string[] = ['number', 'departmentname', 'action'];
  // dataSource = ELEMENT_DATA;
  ELEMENT_DATA: PeriodicElement[] = []
  dataSource: any;
  loader: boolean = false;

  constructor(private dialog: MatDialog, private department: DepartmentService, private toaster: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getAllDepartment();
  }

  getAllDepartment() {
    this.department.getAllDepartmentService().subscribe((res: any) => {
      console.log('chetan_response', res)
      this.ELEMENT_DATA = res.data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);


    }, (err: any) => {
      console.log('chetan_error', err)
    })
  }

  applyFilter(event: any) {
    this.dataSource.filter = event.target.value.trim().toLowerCase();

  }
  addDepartment() {
    this.dialog.open(AddDepartmentComponent)

  }

  deletingDepartment(id: any) {
    // console.log(id)
    let a = confirm("Click on 'OK' to delete ,else Click on 'Cancel' ")

    if (a) {
      this.loader = true;
      this.spinner.show();
      this.department.deletingDepartmentService(id).subscribe((res: any) => {
        this.loader = false;
        console.log(res)
        this.toaster.success("Deleted successfully", "Message", {
          timeOut: 3000,

          progressBar: true,
          progressAnimation: 'increasing',


        });
        this.getAllDepartment();
      }, (err: any) => {
        console.log(err)
        this.toaster.error('Something went wrong', "Error", {
          timeOut: 1000,

          progressBar: true,
          progressAnimation: 'increasing',



        })
      })

    } else {
      return;
    }

  }

  openDialog(elem: any) {
    this.dialog.open(UpdateDepartmentComponent, { data: { elem }, disableClose: true })

  }

}
