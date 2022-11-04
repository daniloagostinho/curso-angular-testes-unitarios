import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'http'
})
export class HttpPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace('http', 'https')
  }

}
