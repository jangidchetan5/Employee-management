import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { EmployeeserviceService } from './employeeservice.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req:any,next:any){
    let service1=this.injector.get(EmployeeserviceService);
    let tokenizedReq=req.clone({
      setHeaders:{
        authorization:`Bearer ${service1.getToken()}`
      }
    });
    return next.handle(tokenizedReq);

  }
}
