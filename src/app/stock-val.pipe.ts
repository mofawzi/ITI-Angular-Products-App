import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockVal'
})
export class StockValPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
   return  value ?  "In stock" : "Not Available"
  }

}
