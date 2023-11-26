import { CodeImp } from './code-imp';
import { ExceptionalTimeMstImp } from './exceptional-time-mst-imp';
import { StateMstImp } from './state-mst-imp';

export interface ManageTradeImp {
  message: string;
  state: string;
  stateMst: StateMstImp;
  exceptionalTimeMst: ExceptionalTimeMstImp[];
  instrumentDropDown: CodeImp[];
  exceptionalTimeDropDown: CodeImp[];
  sqTransactionDropDown: CodeImp[];
}
