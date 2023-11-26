import { DatePipe } from '@angular/common';
import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  NgZone,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IgxSnackbarComponent } from 'igniteui-angular';
import { Authority } from '../authority';
import { Constant } from '../constat';
import { CodeImp } from '../interface/code-imp';
import { FootkeyCanvasImp } from '../interface/footkey-canvas-imp';
import { CodeService } from '../service/code.service';
import { MxService } from '../service/mx.service';

@Component({
  selector: 'app-footkey-chart',
  templateUrl: './footkey-chart.component.html',
  styleUrls: ['./footkey-chart.component.css'],
})
export class FootkeyChartComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
  @ViewChild('footkeyCanvas') footkeyCanvas!: ElementRef;
  @ViewChild('yearSnackbar') private yearSnackbar!: IgxSnackbarComponent;
  @ViewChild('systemSnackbar') private systemSnackbar!: IgxSnackbarComponent;
  context!: CanvasRenderingContext2D | null;
  yearList: CodeImp[] = [];
  codeList: CodeImp[] = [];

  footkeyChart!: FootkeyCanvasImp;
  OldFootkeyChart!: FootkeyCanvasImp;
  height = 1000;
  width = 1000;
  year: string = '';
  systemId: string = '';

  constructor(
    private auth: Authority,
    private mxService: MxService,
    private codeService: CodeService
  ) {}

  ngOnInit(): void {
    if (this.auth.checkLoggedIn()) {
      let pipe = new DatePipe('en-US');

      let nowYear = Number(pipe.transform(Date.now(), 'yyyy')?.toString());

      for (let i = 2001; i <= nowYear; i++) {
        this.yearList.push({
          codeSymbol: i.toString(),
          codeName: i.toString(),
        });
      }
      this.codeService
        .getCodeListById(Constant.idSystem)
        .subscribe((data) => (this.codeList = data));
    }
  }
  ngAfterViewInit(): void {
    const canvas = this.footkeyCanvas.nativeElement as HTMLCanvasElement;
    this.context = canvas.getContext('2d');
  }
  ngAfterViewChecked(): void {
    if (this.footkeyChart != null && this.footkeyChart != undefined) {
      this.drow();
    }
  }
  public getFootkeyChart() {
    let errorFlg = false;
    let errorCnt = 0;
    if (this.year == '') {
      this.yearSnackbar.open('年を入力してください。');

      document
        .getElementsByClassName('igx-overlay__content--relative')
        [errorCnt].setAttribute(
          'style',
          'position: absolute; top:' + (errorCnt * 50 + 100) + 'px;'
        );
      errorCnt++;
      errorFlg = true;
    }
    if (this.systemId == '') {
      this.systemSnackbar.open('システムを入力してください。');
      document
        .getElementsByClassName('igx-overlay__content--relative')
        [errorCnt].setAttribute(
          'style',
          'position: absolute; top:' + (errorCnt * 50 + 100) + 'px;'
        );
      errorCnt++;
      errorFlg = true;
    }

    if (!errorFlg) {
      this.mxService
        .getFootkeyChart(this.year, this.systemId)
        .subscribe((data) => {
          this.footkeyChart = data;
        });
    }
  }

  public drow() {
    this.context!.clearRect(0, 0, this.width, this.height);
    this.context!.strokeStyle = '#000000';
    this.setSize();
    this.setXLabel();
    this.setYLabel();
    this.setFootkey();
    this.setResult();
  }

  public setFootkey() {
    this.context!.beginPath();
    this.context!.setLineDash([]);
    this.context!.strokeStyle = '#000000';
    this.context!.lineWidth = 0.5;
    this.context!.moveTo(
      this.footkeyChart.footkeyList[0].xPoint,
      this.footkeyChart.footkeyList[0].yPoint
    );

    for (let f of this.footkeyChart.footkeyList) {
      this.context!.lineTo(f.xPoint, f.yPoint);
    }

    this.context!.stroke();
    this.context!.beginPath();
  }

  public setResult() {
    this.context!.setLineDash([]);
    this.context!.lineWidth = 1;

    let color = this.footkeyChart.resultList[0].color;
    this.context!.beginPath();
    this.context!.moveTo(
      this.footkeyChart.resultList[0].xPoint,
      this.footkeyChart.resultList[0].yPoint
    );

    for (let f of this.footkeyChart.resultList) {
      if (color == '' && f.color != '') {
        this.context!.moveTo(f.xPoint, f.yPoint);
      } else {
        if (f.color == '') {
          this.context!.stroke();

          this.context!.beginPath();
          this.context!.moveTo(f.xPoint, f.yPoint);
        } else {
          color = f.color;
          this.context!.strokeStyle = f.color;
          this.context!.lineTo(f.xPoint, f.yPoint);
          this.context!.stroke();

          this.context!.beginPath();
          this.context!.moveTo(f.xPoint, f.yPoint);
        }
      }
    }
    this.context!.stroke();
  }

  public setSize() {
    this.width = this.footkeyChart.xSize;
    this.height = this.footkeyChart.ySize;
  }

  public setXLabel() {
    for (let f of this.footkeyChart.xLabelList) {
      //破線を設定
      this.context!.beginPath();
      this.context!.setLineDash([5, 5]);
      this.context!.lineWidth = 0.2;
      this.context!.moveTo(f.labelPoint, this.footkeyChart.ySize);
      this.context!.lineTo(f.labelPoint, 0);
      this.context!.stroke();
    }
  }

  public setYLabel() {
    for (let f of this.footkeyChart.yLabelList) {
      //破線を設定
      this.context!.beginPath();
      this.context!.setLineDash([5, 5]);
      this.context!.lineWidth = 0.2;
      this.context!.moveTo(0, f.labelPoint);
      this.context!.lineTo(this.footkeyChart.xSize, f.labelPoint);
      this.context!.stroke();
    }
  }

  canvasInit() {
    for (let i = 0; i < 4000; i = i + 100) {
      this.context!.lineWidth = 1;
      this.context!.setLineDash([]);
      this.context!.font = "bold 20px 'ＭＳ ゴシック'";
      this.context!.fillText(Math.abs(i * 5 - 40000).toString(), 20, i, 80);

      //X軸の破線を描画
      this.context!.beginPath();
      this.context!.setLineDash([5, 5]);
      this.context!.moveTo(100, i);
      this.context!.lineTo(4000, i);
      this.context!.strokeStyle = 'brack';
      this.context!.lineWidth = 0.2;
      this.context!.stroke();

      //Y軸の破線を描画
      //非時系列チャートだから固定値じゃなくてサーバーからの値をバインドする必要がある
      this.context!.beginPath();
      this.context!.setLineDash([5, 5]);
      this.context!.moveTo(i, 0);
      this.context!.lineTo(i, 4000);
      this.context!.strokeStyle = 'brack';
      this.context!.lineWidth = 0.2;
      this.context!.stroke();
    }
    this.context!.setLineDash([]);
  }
}
