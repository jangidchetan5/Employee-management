import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { LeaveAdminService } from 'src/app/core/services/leave-admin.service';
import { AddLeavesAdminComponent } from './add-leaves-admin/add-leaves-admin.component';
import { UpdateLeavesAdminComponent } from './update-leaves-admin/update-leaves-admin.component';

export interface PeriodicElement {
  name: string,
  leavetype:string,
  from:Date,
  to:Date,
  noofdays:string,
  reason:string,
  status:string
  
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
  selector: 'app-leaves-admin',
  templateUrl: './leaves-admin.component.html',
  styleUrls: ['./leaves-admin.component.css']
})
export class LeavesAdminComponent implements OnInit {
  displayedColumns: string[] = ['name', 'leavetype', 'from', 'to','noofdays','reason','status','action'];
  // dataSource = ELEMENT_DATA;
  ELEMENT_DATA: PeriodicElement[] = []
  dataSource: any;


  constructor(private dialog:MatDialog,private leavesAdmin:LeaveAdminService) { }

  ngOnInit(): void {
    this.getAllLeavesAdmin()
  }

  getAllLeavesAdmin() {
    this.leavesAdmin.getAllLeavesAdminService().subscribe((res: any) => {
      console.log('chetan_response', res)
      this.ELEMENT_DATA = res.data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);


    }, (err: any) => {
      console.log('chetan_error', err)
    })
  }


  addingLeavesAdmin(){
    this.dialog.open(AddLeavesAdminComponent)

  }

  editingLeavesAdmin(elem:any){
    this.dialog.open(UpdateLeavesAdminComponent, { data: { elem }, disableClose: true })
  }

  deletingLeavesAdmin(id:any){
    // console.log(id);
    let a = confirm("Click on 'OK' to delete ,else Click on 'Cancel' ")

    if (a) {
      this.leavesAdmin.deletingLeavesAdminService(id).subscribe((res: any) => {
        console.log(res)
        this.getAllLeavesAdmin()
      }, (err: any) => {
        console.log(err)
      })

    } else {
      return;
    }



  }

}
