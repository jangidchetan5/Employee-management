import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse ,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private http:HttpClient) { }

  resetingPasswordService(admin:any){
   return this.http.patch(`http://localhost:8000/reset-password`,admin)


  }
}
