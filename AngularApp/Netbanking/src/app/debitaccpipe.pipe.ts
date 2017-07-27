import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'debitaccpipe'
})
export class DebitaccpipePipe implements PipeTransform {

  transform(value: any[], args: string): any[] {
    let filter: string = args ? args.toLocaleLowerCase() : null;
      let u=filter ? value.filter( (item : any) => item.fromAccount.accNum.toLowerCase().indexOf(filter) != -1 ) : value;
          return u;
  }

}
