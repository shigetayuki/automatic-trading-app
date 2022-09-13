import { Component,  OnInit, ViewChild, } from '@angular/core';
import { MxService } from '../service/mx.service';
import { DatePipe } from '@angular/common';
import { Authority } from '../authority';
import { MxImp } from '../interface/mx-imp';
import { CodeService } from '../service/code.service';
import { CodeImp } from '../interface/code-imp';
import { IgxSnackbarComponent } from 'igniteui-angular';

@Component({
  selector: 'app-result-by-months-component',
  templateUrl: './result-by-months-component.html',
  styleUrls: ['./result-by-months-component.css']
})
export class ResultByMonthsComponent implements OnInit {
  @ViewChild('yearSnackbar') private yearSnackbar!:IgxSnackbarComponent;
  @ViewChild('monthSnackbar') private monthSnackbar!: IgxSnackbarComponent;
  mxList: MxImp[] = [];
  yearList:CodeImp[]=[];
  monthList:CodeImp[]=[];
  year ="";
  month ="";
  systemList = ['FK','FS','REFK','MX'];
  constructor(private mxService: MxService,private auth: Authority,private codeService:CodeService) { }

  ngOnInit(): void {
    if(this.auth.checkLoggedIn()){
      let pipe = new DatePipe('en-US');
      
      let nowYear = Number(pipe.transform(Date.now(),'yyyy')!.toString());
  
      for(let i = 2001; i <= nowYear; i++){
        this.yearList.push(
          {
            codeSymbol: i.toString(),
            codeName:i.toString()
          }
        ); 
      }
      for(let i = 1; i <= 12;i++){
        this.monthList.push(
          {
            codeSymbol: i.toString(),
            codeName:i.toString()
          }
        ); 
      }
    }
  }
  getMapList(){
    // ［2］リクエストを発信
    let errorFlg = false;
    let errorCnt = 0; 
    if(this.year == ""){
      this.yearSnackbar.open('年を入力してください。');

      document.getElementsByClassName("igx-overlay__content--relative")[errorCnt]
      .setAttribute("style","position: absolute; top:" + (errorCnt*50+100) +"px;");
      errorCnt++;
      errorFlg=true;
    }

    if(this.month == ""){
      this.monthSnackbar.open('月を入力してください。');

      document.getElementsByClassName("igx-overlay__content--relative")[errorCnt]
      .setAttribute("style","position: absolute; top:" + (errorCnt*50+100) +"px;");
      errorCnt++;
      errorFlg=true;
    }
    
    if(!errorFlg){
      this.mxService.getMxList(this.year,this.month).subscribe(mxList => this.mxList = mxList);
    }
  }
}
