import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authority } from '../authority';
import { Observable } from 'rxjs';
import { ManageTradeImp } from '../interface/manage-trade-imp';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ManageTradeService {
  constructor(private http: HttpClient, private auth: Authority) {}

  getInit(): Observable<ManageTradeImp> {
    return this.http.get<ManageTradeImp>(
      environment.baseUrl + 'getManageTradeInit',
      {
        headers: this.auth.ResponseHeader,
      }
    );
  }

  update(manageTradeImp: ManageTradeImp): Observable<ManageTradeImp> {
    return this.http.get<ManageTradeImp>(
      environment.baseUrl + 'manageTradeUpdate',
      {
        headers: this.auth.ResponseHeader,
        params: new HttpParams().set(
          'manageTrade',
          JSON.stringify(manageTradeImp)
        ),
      }
    );
  }
  start(manageTradeImp: ManageTradeImp): Observable<ManageTradeImp> {
    return this.http.get<ManageTradeImp>(environment.baseUrl + 'start', {
      headers: this.auth.ResponseHeader,
      params: new HttpParams().set(
        'manageTrade',
        JSON.stringify(manageTradeImp)
      ),
    });
  }
  stop(manageTradeImp: ManageTradeImp): Observable<ManageTradeImp> {
    return this.http.get<ManageTradeImp>(environment.baseUrl + 'stop', {
      headers: this.auth.ResponseHeader,
      params: new HttpParams().set(
        'manageTrade',
        JSON.stringify(manageTradeImp)
      ),
    });
  }
}
