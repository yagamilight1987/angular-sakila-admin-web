import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Pipe({ name: 'checkDate', pure: false })
export class CheckDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(content) {
    // 2006-02-14T23:32:19.000Z
    if (moment(content, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', true).isValid()) {
      return this.datePipe.transform(content, 'medium');
    }
    return content;
  }
}
