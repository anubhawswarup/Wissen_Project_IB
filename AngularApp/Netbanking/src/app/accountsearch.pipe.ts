
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountsearchPipe'
})
export class AccountsearchPipe implements PipeTransform {

  transform(value: any[], field:string , args: string): any[] {
    let filter: string = args ? args.toLocaleLowerCase() : null;
      let u=filter ? value.filter( (item : Account) =>
          item[field].toLowerCase().indexOf(filter) != -1 ) : value;
          return u;
  }

}
