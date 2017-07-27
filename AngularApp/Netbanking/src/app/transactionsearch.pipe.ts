import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionsearch'
})
export class TransactionsearchPipe implements PipeTransform {
transform(value: any[], field: string, args: number): any[]{
      let filter:number = args ? args : null;
      let u=filter ? value.filter( 
        (item : any) =>  item[field] == filter  ) : value;
          return u;
   }
}
