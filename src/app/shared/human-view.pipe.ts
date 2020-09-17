import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanView',
})
export class HumanViewPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const strCount = value.split('').reverse();

    const size = 3;
    const subarray = [];
    for (let i = 0; i < Math.ceil(strCount.length / size); i++) {
      subarray[i] = strCount.slice(i * size, i * size + size).join('');
    }
    return subarray.reverse().join(' ');
  }
}
