import { HttpClient, HttpResponse ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  constructor(private http:HttpClient) { }

  creatingTodayWork(Employee1:any){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.post(`http://localhost:8000/createtimesheet`,Employee1,{headers})


  }

  getAllTodayWorkService(){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.get(`http://localhost:8000/timesheetList`,{headers})
  }

  updatingTodayWorkService(id:any, Employee1:any){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.patch(`http://localhost:8000/updatetimesheet/${id}`,Employee1,{headers})

  }

  deletingTodayWorkService(id:any){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.delete(`http://localhost:8000/deletetimesheet/${id}`,{headers})

  }
}
