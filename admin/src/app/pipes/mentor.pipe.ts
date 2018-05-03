import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mentor'
})
export class MentorPipe implements PipeTransform {

  transform(value: any, input: string, field: string = 'name'): any {
    if (input) {
      input = input.toLowerCase();
      return value.filter(function (el: any) {
        return el[field].toLowerCase().indexOf(input) > -1;
      });
    }
    return value;
  }

}
