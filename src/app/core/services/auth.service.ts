import { HttpClient, HttpResponse ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  signUpUrl = 'http://localhost:8000/signup';
  loginUrl = 'http://localhost:8000/login';
  getAllEmployee='http://localhost:8000/employeeList';
 
  
  constructor(private http: HttpClient ) {}
    //function for signup
    registerUser(user: any) {
      return this.http.post(this.signUpUrl, user);
    }
    //function for login
    loginUser(user: any) {
      return this.http.post(this.loginUrl, user);
    }
      //function for check token present or not
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getAllEmployeeService(){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.get(this.getAllEmployee,{headers});
  }
}
