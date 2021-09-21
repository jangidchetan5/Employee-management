import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { HolidayService } from 'src/app/core/services/holiday.service';

@Component({
  selector: 'app-holiday-dialog',
  templateUrl: './holiday-dialog.component.html',
  styleUrls: ['./holiday-dialog.component.css']
})
export class HolidayDialogComponent implements OnInit {
  Holiday = {
    holidayName: '',
    holidayDay: '',
    holidayDate: ''
  }

  constructor(private auth: AuthService, private holiday: HolidayService) { }

  ngOnInit(): void {
  }
  creatingHolidays12() {
    console.log(this.Holiday)
    this.holiday.creatingHoliday12Service(this.Holiday).subscribe((res: any) => {
      console.log(res)
    }, (err: any) => {
      console.log(err)
    })

  }

}
