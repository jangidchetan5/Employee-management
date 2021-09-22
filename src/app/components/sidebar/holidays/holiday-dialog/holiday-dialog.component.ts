import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HolidayService } from 'src/app/core/services/holiday.service';


@Component({
  selector: 'app-holiday-dialog',
  templateUrl: './holiday-dialog.component.html',
  styleUrls: ['./holiday-dialog.component.css']
})
export class HolidayDialogComponent implements OnInit {
  Holiday = {
    name: '',
    day: '',
    date: ''
  }

  loader:boolean=false;

  constructor( private holiday: HolidayService,private toaster:ToastrService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }

  creatingHolidays12() {
    // console.log(this.Holiday)
    this.loader=true;
    this.spinner.show()
    this.holiday.creatingHoliday12Service(this.Holiday).subscribe((res: any) => {
      this.loader=false;
      console.log(res)
      this.toaster.success("Added successfully","Message",{
        timeOut:3000,
       
        progressBar:true,
        progressAnimation:'increasing',
      
       
      });
      
    }, (err: any) => {
      this.loader=false;
      console.log(err)
      this.toaster.error('Something went wrong',"Error",{
        timeOut:1000,
       
        progressBar:true,
        progressAnimation:'increasing',
        

       
      })
    })

  }

}
