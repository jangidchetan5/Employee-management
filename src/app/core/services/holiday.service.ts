import { HttpClient, HttpResponse ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  constructor(private http:HttpClient) { }

   creatingHoliday12Service(Holiday1:any){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.post(`http://localhost:8000/createHoliday`,Holiday1,{headers})
  }

  getAllHolidayService(){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.get(`http://localhost:8000/holidaysList`,{headers})
  }

  deletingHolidayService(id1:any){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.delete(`http://localhost:8000/deleteHoliday/${id1}`,{headers})


  }

}
