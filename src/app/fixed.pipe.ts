import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixed'
})
export class FixedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value === Number) {
      return Number(value).toFixed(2)
    } else {
      return null;
    }
  }

}
