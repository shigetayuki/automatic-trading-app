import { ExceptionalTimeMstImp } from '../interface/exceptional-time-mst-imp';

export class ExceptionalTimeMst implements ExceptionalTimeMstImp {
  deleteFlg: string;
  addRowFlg: string;
  time: string;
  exceptionalTimeKbn: string;
  sqTransactionKbn: string;
  constructor() {
    this.deleteFlg = '0';
    this.addRowFlg = '0';
    this.time = '';
    this.exceptionalTimeKbn = '0';
    this.sqTransactionKbn = '0';
  }
}
