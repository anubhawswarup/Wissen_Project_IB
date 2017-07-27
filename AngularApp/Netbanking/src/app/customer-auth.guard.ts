import {Injectable} from '@angular/core';

import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CustomerAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (sessionStorage.getItem('isLoggedin') && sessionStorage.getItem('isLoggedin') === 'true') {
      console.log("Guard true");
      return true;
    }
    console.log("Guard false");
    // not logged in so redirect to login page with the return url and return false
    this.router.navigate(['/login']);
    return false;
  }
}
