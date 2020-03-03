
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSort'
})
export class DateSortPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const sortedValues = 
    value.sort((a, b) => new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime());
    return sortedValues;

  }
 }
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'dateSort'
// })
// export class DateSortPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }
