import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'checkDate', pure: false })
export class CheckDatePipe implements PipeTransform {
  constructor() {}

  transform(content) {
    return content;
  }
}
