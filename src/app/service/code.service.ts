import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Authority } from '../authority';
import { CodeImp } from '../interface/code-imp';

@Injectable({
  providedIn: 'root'
})
export class CodeService {
  constructor(private http: HttpClient,private auth: Authority) { }
  getCodeListById(codeId:string): Observable<CodeImp[]> {
    return this.http.get<CodeImp[]>(environment.baseUrl + 'getCodeListById',{
      headers: this.auth.ResponseHeader,
      params : new HttpParams()
      .set('codeId',codeId)
    }); 
  }
}
