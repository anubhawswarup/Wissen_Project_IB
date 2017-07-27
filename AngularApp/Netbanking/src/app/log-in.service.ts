import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import {Url} from './url'
@Injectable()
export class LogInService {
message = '';
status ='';
  
  constructor(public http:Http, public u: Url) { }
  
  login(loginreq){ 
    let header = new Headers();
    header.append('content-type','application/json');
    return this.http.post('http://'+this.u.url+':8080/checkLoginDetails', loginreq,header).map(resp => resp.json())
  }
  logout(){
    sessionStorage.removeItem('isLoggedin')
  }
  

}
