import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('values',args,value);
    
    // if(val.toLowerCase() === 'male'){
    //    return 'Mr ' + value;
    // } else {
    //    return 'Miss ' + value;
    // }

    if(args=='salary'){
      return 'SL' +value
    }
  else if(args=='name')
  return 'SL' +value.toUpperCase();
    
   }
}
