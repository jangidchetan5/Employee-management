import { HttpClient, HttpResponse ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LeaveAdminService {

  constructor(private http:HttpClient) { }

  creatingLeaves(Leaves:any){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.post(`http://localhost:8000/createLeavesAdmin`,Leaves,{headers})


  }

  getAllLeavesAdminService(){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.get(`http://localhost:8000/leavesAdminList`,{headers})
  }

  deletingLeavesAdminService(id:any){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.delete(`http://localhost:8000/deleteLeavesAdmin/${id}`,{headers})

  }

  updatingLeavesAdminsService(id:any, Leaves1:any){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.patch(`http://localhost:8000/updateLeavesAdmin/${id}`,Leaves1,{headers})


  }
}
