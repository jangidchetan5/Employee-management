import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { HolidayService } from 'src/app/core/services/holiday.service';
import { HolidayDialogComponent } from './holiday-dialog/holiday-dialog.component';

export interface PeriodicElement {
  holidayName: string,
  holidayDay: string,
  holidayDate: Date,
  
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
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {
  displayedColumns: string[] = ['holidayName', 'holidayDay', 'holidayDate','action'];
  ELEMENT_DATA: PeriodicElement[]=[]
  dataSource:any;

  // dataSource = ELEMENT_DATA;

  constructor(private dialog:MatDialog,private holiday:HolidayService) { }

  ngOnInit(): void {
    this.getAllHoliday()
  }

  getAllHoliday(){
    this.holiday.getAllHolidayService().subscribe((res:any)=>{
      console.log('chetan_response',res)
      this.ELEMENT_DATA = res.data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    
     
    },(err:any)=>{
      console.log('chetan_error',err)
    })
  }


  creatingHoliday(){
    // console.log("creating holiday...")
    this.dialog.open(HolidayDialogComponent)
  }

  deletingHoliday(id:any){
    // console.log(id)
    let a = confirm("Click on 'OK' to delete ,else Click on 'Cancel' ")

    if (a) {
      this.holiday.deletingHolidayService(id).subscribe((res: any) => {
        console.log(res)
        this.getAllHoliday();
      }, (err: any) => {
        console.log(err)
      })

    } else {
      return;
    }

  }

}
