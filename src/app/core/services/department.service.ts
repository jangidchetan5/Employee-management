import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse ,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  creatingDepartment(Department1:any){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.post(`http://localhost:8000/createdepartment`,Department1,{headers})

  }

  getAllDepartmentService(){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.get(`http://localhost:8000/departmentList`,{headers})

  }

  deletingDepartmentService(id:any){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.delete(`http://localhost:8000/deletedepartment/${id}`,{headers})

  }

  updatingDepartmentService(id:any,Department:any){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.patch(`http://localhost:8000/updatedepartment/${id}`,Department,{headers})

  }
}
