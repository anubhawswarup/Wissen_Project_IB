import { User } from './user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pinsearchpipe'
})
export class PinsearchpipePipe implements PipeTransform {

  transform(value: User[], args: string): User[]{
     let filter: string = args ? args.toLocaleLowerCase() : null;
      let u=filter ? value.filter( (item : User) => item.address.pincode.toLowerCase().indexOf(filter) != -1 ) : value;
          return u;
  }

}
