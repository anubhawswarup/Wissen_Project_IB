import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { GetDetailsService } from './get-details.service';

@Injectable()
export class UserResolverService implements Resolve<any> {

  constructor(private route: ActivatedRoute, private getDetails: GetDetailsService) { }

  resolve() {
    console.log("here ")
    return this.getDetails.getCount();

  }

}