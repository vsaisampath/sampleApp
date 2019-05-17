import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import {configurations} from '../../configuration/app.config'
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  
//  loginurl: string = 'http://172.16.8.126/JobPortal/api/Login'; 
  
  constructor(private http: HttpClient) { }

  GetHttpHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return headers;
  }
  
  loginauthenticate(loginID:string,password:string):Observable<any>{
    const httpheaders=new HttpHeaders().set("Content-Type","application/json");
    return  this.http.post(configurations.baseUrl + 'Login/Staff',{loginID,password});
  }

  
 forgotpassword(EmailID: string): Observable<any> {
  return  this.http.post(configurations.baseUrl  + 'ForgotPassword/Recruiter', { EmailID }, { headers:  this.GetHttpHeaders() });
}
}