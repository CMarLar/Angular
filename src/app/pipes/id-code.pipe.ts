import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idCode'
})
export class IdCodePipe implements PipeTransform {

  transform(value: number): string {
    
    let result = "Ref " + value
    
    return result;
  }

}
