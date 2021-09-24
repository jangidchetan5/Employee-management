import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TimesheetService } from 'src/app/core/services/timesheet.service';
import { AddtodayworkComponent } from './addtodaywork/addtodaywork.component';
import { UpdatetodayworkComponent } from './updatetodaywork/updatetodaywork.component';

export interface PeriodicElement {
 employeename:string,
 date:Date,
 projects:string,
 assignedhours:string,
 hours:string,
 description:string 
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
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  loader:boolean=false;
  displayedColumns: string[] = ['employeename', 'date','projects', 'assignedhours', 'hours','description','action'];
  // dataSource = ELEMENT_DATA;
  ELEMENT_DATA: PeriodicElement[] = []
  dataSource: any;



  constructor(private dialog:MatDialog,private toaster:ToastrService,private spinner:NgxSpinnerService,private timesheet:TimesheetService) { }

  ngOnInit(): void {
    this.getAllTodayWork();
  }
  getAllTodayWork() {
    this.timesheet.getAllTodayWorkService().subscribe((res: any) => {
      console.log('chetan_response', res)
      this.ELEMENT_DATA = res.data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);


    }, (err: any) => {
      console.log('chetan_error', err)
    })
  }

  applyFilter(event:any){
    this.dataSource.filter=event.target.value.trim().toLowerCase();


  }

  addingTodayWork(){
    this.dialog.open(AddtodayworkComponent)

  }

  openDialog(elem:any){
    this.dialog.open(UpdatetodayworkComponent, { data: { elem }, disableClose: true })

  }

  deletingTodayWork(id:any){
    let a = confirm("Click on 'OK' to delete ,else Click on 'Cancel' ")

    if (a) {
      this.loader=true;
      this.spinner.show();
      this.timesheet.deletingTodayWorkService(id).subscribe((res: any) => {
        this.loader=false;
      console.log(res)
      this.toaster.success("Deleted successfully","Message",{
        timeOut:3000,
       
        progressBar:true,
        progressAnimation:'increasing',
      
       
      });
        this.getAllTodayWork()
      }, (err: any) => {
        this.loader=false;
      console.log(err)
      this.toaster.error('Something went wrong',"Error",{
        timeOut:1000,
       
        progressBar:true,
        progressAnimation:'increasing',
        

       
      })
      })

    } else {
      return;
    }

  }

}
