import { Injectable } from '@angular/core';
import {CanActivate ,Router} from '@angular/router';
import { EmployeeserviceService } from './employeeservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private employee1:EmployeeserviceService, private _router:Router){

  }

  canActivate():boolean{
    if(this.employee1.loggedIn1234()){
      return true;
    }
    else{
      this._router.navigate(['/login']);
      return false;
    }
  }

}
