import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxSnackbarComponent } from 'igniteui-angular';
import { Authority } from '../authority';
import { Constant } from '../constat';
import { CodeImp } from '../interface/code-imp';
import { TradeSystemResultImp } from '../interface/trade-system-result-imp';
import { CodeService } from '../service/code.service';
import { MxService } from '../service/mx.service';

@Component({
  selector: 'app-result-by-systems',
  templateUrl: './result-by-systems.component.html',
  styleUrls: ['./result-by-systems.component.css']
})
export class ResultBySystemsComponent implements OnInit {
  @ViewChild('systemSnackbar') private systemSnackbar!:IgxSnackbarComponent;
  systemId = "";
  tradeSystemResultList: TradeSystemResultImp[] = [];
  codeList:CodeImp[]=[];
  constructor(private auth:Authority,private mxService :MxService,private codeService:CodeService) { }

  ngOnInit(): void {
    if(this.auth.checkLoggedIn()){
      this.codeService.getCodeListById(Constant.idSystem).subscribe(data=>this.codeList=data);
    }
  }

  getMxListBySystems(){
    let errorFlg = false;
    if(this.systemId==''){
      this.systemSnackbar.open('システムを入力してください。');

      document.getElementsByClassName("igx-overlay__content--relative")[0]
      .setAttribute("style","position: absolute; top:100px;");

      errorFlg=true;
    }

    if(!errorFlg){
      this.mxService.getMxListBySystems(this.systemId).subscribe(tradeSystemResultList => this.tradeSystemResultList = tradeSystemResultList);
    }
  }

  setSystemId(event :string){
    this.systemId=event;
  }
}
