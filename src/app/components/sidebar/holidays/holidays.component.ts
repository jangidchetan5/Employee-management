import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { HolidayService } from 'src/app/core/services/holiday.service';
import { HolidayDialogComponent } from './holiday-dialog/holiday-dialog.component';
import { UpdateHolidayDialogComponent } from './update-holiday-dialog/update-holiday-dialog.component';

export interface PeriodicElement {
  holidayName: string,
  holidayDay: string,
  holidayDate: Date,

}

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {
  displayedColumns: string[] = ['holidayName', 'holidayDay', 'holidayDate', 'action'];
  ELEMENT_DATA: PeriodicElement[] = []
  dataSource: any;



  constructor(private dialog: MatDialog, private holiday: HolidayService) { }

  ngOnInit(): void {
    this.getAllHoliday()
  }

  getAllHoliday() {
    this.holiday.getAllHolidayService().subscribe((res: any) => {
      console.log('chetan_response', res)
      this.ELEMENT_DATA = res.data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);


    }, (err: any) => {
      console.log('chetan_error', err)
    })
  }


  creatingHoliday() {
   
    this.dialog.open(HolidayDialogComponent)
  }

  deletingHoliday(id: any) {
    
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

  updateHoliday(elem:any){
    this.dialog.open(UpdateHolidayDialogComponent, { data: { elem }, disableClose: true })


  }

}
