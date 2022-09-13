import { Pipe, PipeTransform } from '@angular/core';
import { CodeListImp } from '../interface/code-list-imp';

@Pipe({
  name: 'signal'
})
export class SignalPipe implements PipeTransform {

  transform(value: number,codeList: CodeListImp[]): string {
    // let c=null;
    // for(let code:CodeListImp){
    //   if(code.codeId==2){
    //     c=code;
    //   }
    // }

    return "";
  }

}
