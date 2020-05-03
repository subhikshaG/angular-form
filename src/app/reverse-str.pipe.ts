import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr'
})
export class ReverseStrPipe implements PipeTransform {

  transform(value: string,firstName:String,lastName:String): any {
    let newStr:string = '';
    newStr+=firstName;
    for(let i = value.length-1;i>=0;i--){
      newStr=newStr+value.charAt(i);

    }
    newStr+=lastName;
    return newStr;
  }

}
