import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxSnackbarComponent } from 'igniteui-angular';
import { ManageTradeImp } from '../interface/manage-trade-imp';
import { ExceptionalTimeMst } from '../dto/exceptional-time-mst';
import { Authority } from '../authority';
import { ManageTradeService } from '../service/manage-trade.service';

@Component({
  selector: 'app-manage-trade',
  templateUrl: './manage-trade.component.html',
  styleUrls: ['./manage-trade.component.css'],
})
export class ManageTradeComponent implements OnInit {
  @ViewChild('messageSnackbar') private messageSnackbar!: IgxSnackbarComponent;
  manageTradeImp!: ManageTradeImp;
  constructor(
    private manageTradeService: ManageTradeService,
    private auth: Authority
  ) {}

  ngOnInit(): void {
    if (this.auth.checkLoggedIn()) {
      this.manageTradeService
        .getInit()
        .subscribe((data) => (this.manageTradeImp = data));
    }
  }

  getTradeState(): boolean {
    if (this.manageTradeImp == null || this.manageTradeImp == undefined) {
      return false;
    } else if (this.manageTradeImp.state == '1') {
      return true;
    } else {
      return false;
    }
  }

  getRowClass(idx: number) {
    let deleteFlg = this.manageTradeImp.exceptionalTimeMst[idx].deleteFlg;
    if (deleteFlg == '1') {
      return 'delete-row';
    } else {
      return '';
    }
  }

  addRow() {
    let exceptionalTimeMst = new ExceptionalTimeMst();
    exceptionalTimeMst.addRowFlg = '1';
    this.manageTradeImp.exceptionalTimeMst.push(exceptionalTimeMst);
  }

  update() {
    this.manageTradeService.update(this.manageTradeImp).subscribe(
      (data) => {
        this.manageTradeImp = data;
        if (
          this.manageTradeImp.message != undefined &&
          this.manageTradeImp.message != null &&
          this.manageTradeImp.message != ''
        ) {
          this.messageSnackbar.open(this.manageTradeImp.message);
          document
            .getElementsByClassName('igx-overlay__content--relative')[0]
            .setAttribute('style', 'position: absolute; top:100px;');
        }
      },
      (error) => {
        this.messageSnackbar.open('システムエラーが発生しました。');
        document
          .getElementsByClassName('igx-overlay__content--relative')[0]
          .setAttribute('style', 'position: absolute; top:100px;');
      }
    );
  }
  start() {
    this.manageTradeService.start(this.manageTradeImp).subscribe(
      (data) => {
        this.manageTradeImp = data;
        if (
          this.manageTradeImp.message != undefined &&
          this.manageTradeImp.message != null &&
          this.manageTradeImp.message != ''
        ) {
          this.messageSnackbar.open(this.manageTradeImp.message);
          document
            .getElementsByClassName('igx-overlay__content--relative')[0]
            .setAttribute('style', 'position: absolute; top:100px;');
        }
      },
      (error) => {
        this.messageSnackbar.open('システムエラーが発生しました。');
        document
          .getElementsByClassName('igx-overlay__content--relative')[0]
          .setAttribute('style', 'position: absolute; top:100px;');
      }
    );
  }
  stop() {
    this.manageTradeService.stop(this.manageTradeImp).subscribe(
      (data) => {
        this.manageTradeImp = data;
        if (
          this.manageTradeImp.message != undefined &&
          this.manageTradeImp.message != null &&
          this.manageTradeImp.message != ''
        ) {
          this.messageSnackbar.open(this.manageTradeImp.message);
          document
            .getElementsByClassName('igx-overlay__content--relative')[0]
            .setAttribute('style', 'position: absolute; top:100px;');
        }
      },
      (error) => {
        this.messageSnackbar.open('システムエラーが発生しました。');
        document
          .getElementsByClassName('igx-overlay__content--relative')[0]
          .setAttribute('style', 'position: absolute; top:100px;');
      }
    );
  }
}
