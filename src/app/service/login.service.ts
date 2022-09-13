import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Constant } from '../constat'
import { User } from '../dto/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  
  sendUserInfo(userName:string,password:string): Observable<HttpResponse<User>> {
    return this.http.post<User>(environment.baseUrl + 'login',{
        userName: userName,
        password: password,
    },{ observe: 'response'});
  }
  
}
