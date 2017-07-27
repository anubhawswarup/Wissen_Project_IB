import { Url } from './url';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class ChangeDetailsService {

constructor(private http:Http, public u : Url) { }

changePassword(json_obj){
let header = new Headers();
header.append('content-type','application/json');
console.log(json_obj);
return this.http.post('http://'+this.u.url+':8080/'+'updatePassword',json_obj,header).map(res=>res.json());
}

}