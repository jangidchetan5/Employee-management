import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignationsService {

  constructor(private http:HttpClient) { }

  creatingDesignations(Designation1:any){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.post(`http://localhost:8000/createdesignations`,Designation1,{headers})

  }

  getAllDesignationsService(){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.get(`http://localhost:8000/designationsList`,{headers})
  }


  updatingDesignationsService(id:any,Designations1:any){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.patch(`http://localhost:8000/updatedesignations/${id}`,Designations1,{headers})

  }

  deletingDesignationsService(id:any){
    let token=localStorage.getItem('token');
    let headers = new HttpHeaders().set("authorization", 'Bearer ' + token);
    return this.http.delete(`http://localhost:8000/deletedesignations/${id}`,{headers})

  }
}
