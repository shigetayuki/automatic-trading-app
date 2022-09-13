import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Authority } from '../authority';
import { FootkeyCanvasImp } from '../interface/footkey-canvas-imp';
import { MxImp } from '../interface/mx-imp';
import { TradeSystemResultImp } from '../interface/trade-system-result-imp';

@Injectable({
  providedIn: 'root'
})
export class MxService {
  constructor(private http: HttpClient,private auth: Authority) { }

  getMxList(year:string,month:string): Observable<MxImp[]> {
    return this.http.get<MxImp[]>(environment.baseUrl + 'getMxListByMonths',{
      headers: this.auth.ResponseHeader,
      params : new HttpParams()
      .set('year', year)
      .set('month', month)
    }); 
  }

  getMxListBySystems(systemId :string): Observable<TradeSystemResultImp[]> {
    return this.http.get<TradeSystemResultImp[]>(environment.baseUrl + 'getMxListBySystems',{
      headers: this.auth.ResponseHeader,
      params : new HttpParams()
      .set('systemId', systemId)
    }); 
  }

  getFootkeyChart(year:string,systemId:string):Observable<FootkeyCanvasImp>{
    return this.http.get<FootkeyCanvasImp>(environment.baseUrl + 'getFootkeyChart',{
      headers: this.auth.ResponseHeader,
      params : new HttpParams()
      .set('year', year)
      .set('systemId',systemId)
    }); 
  }
}
