import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  private _registerUrl='http://localhost:3500/employeeregistration';
  private _loginUrl='http://localhost:3500/login';
  private _abcUrl='http://localhost:3500/sidenav1';

  constructor(private http:HttpClient,private _router:Router) { }
  registeringEmployeeService(registerEmployeeData1:any){
    return this.http.post(this._registerUrl,registerEmployeeData1)


  }

  getToken(){
    return localStorage.getItem('token');
  }

  event123(){
   return this.http.get<any>(this._abcUrl)
  }
  loginService(employeeData1:any){
    return this.http.post(this._loginUrl,employeeData1)

  }

  loggedIn1234(){
    return !!localStorage.getItem('token');
 }

 logoutUser(){
  localStorage.removeItem('token');
  this._router.navigate(['/login']);
}


}
