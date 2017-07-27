import { User } from './user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

transform(value: User[], field: string, args: string): User[]{

      let filter: string = args ? args.toLocaleLowerCase() : null;
      let u=filter ? value.filter( (item : User) =>
          item[field].toLowerCase().indexOf(filter) != -1 ) : value;
          return u;
   }
}
