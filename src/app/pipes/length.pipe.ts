import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'length', pure: false })
export class LengthPipe implements PipeTransform {
  transform(content) {
    // tslint:disable-next-line:radix
    const length: number = parseInt(content);
    const hour = Math.floor(length / 60);
    const min = length % 60;
    return `${hour}h${min === 0 ? '' : ' ' + min + 'm'}`;
  }
}
