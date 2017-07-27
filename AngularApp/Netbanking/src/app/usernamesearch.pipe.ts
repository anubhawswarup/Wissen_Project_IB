
import { User } from './user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usernamesearchPipe'
})
export class UsernamesearchPipe implements PipeTransform {
  transform(value: any[], args: string): any[] {
    let filter: string = args ? args.toLocaleLowerCase() : null;
      let u=filter ? value.filter( (item : any) => item.user.userName.toLowerCase().indexOf(filter) != -1 ) : value;
          return u;
  }
}
