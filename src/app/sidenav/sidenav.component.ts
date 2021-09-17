import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(public service1:EmployeeserviceService,private _router:Router) { }

  ngOnInit(): void {
    this.service1.event123().subscribe((res:any)=>{console.log('chetan_sidenav',res)},error=>{
      // console.log(error)
      if(error instanceof HttpErrorResponse){
        if(error.status===401){
          this._router.navigate(['/login']);
        }
      }
    })
  }

}
