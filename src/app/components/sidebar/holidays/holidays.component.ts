import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

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
  loader:boolean=false;



  constructor(private dialog: MatDialog, private holiday: HolidayService,private toaster:ToastrService,private spinner:NgxSpinnerService) { }

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
      this.loader=true;
      this.spinner.show();
      this.holiday.deletingHolidayService(id).subscribe((res: any) => {
        this.loader=false;
        console.log(res)
        this.toaster.success("Deleted successfully","Message",{
          timeOut:3000,
         
          progressBar:true,
          progressAnimation:'increasing',
        
         
        });
        this.getAllHoliday();
      }, (err: any) => {
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

  updateHoliday(elem:any){
    this.dialog.open(UpdateHolidayDialogComponent, { data: { elem }, disableClose: true })


  }

  applyFilter(event:any){
    this.dataSource.filter=event.target.value.trim().toLowerCase();

  }

}
