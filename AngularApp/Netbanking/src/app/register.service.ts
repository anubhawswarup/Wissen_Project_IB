import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import {Url} from './url'
@Injectable()
export class RegisterService {
message = '';
status ='';
  
  constructor(public http:Http, public u : Url) { }
  
  register(registerreq){ 
    console.log(registerreq)
    let header = new Headers();
    header.append('content-type','application/json');
    return this.http.put('http://'+this.u.url+':8080/addUser', registerreq,header).map(resp => resp.json())
  }

}
