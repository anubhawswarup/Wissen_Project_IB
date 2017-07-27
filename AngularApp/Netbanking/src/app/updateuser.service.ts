import { Url } from './url';
import { User } from './user';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
 import 'rxjs/add/operator/map'

@Injectable()
export class UpdateuserService {

  
  constructor(private http:Http, public u : Url) { }

  updateUser(ob:any){
    let header=new Headers();
    header.append('content-type','application/json')
    return this.http.post('http://'+this.u.url+':8080/'+'updateuser',ob,header).map(resp=>resp.json())
  }

  

  updateAccount(ob:any){
    console.log("in account user")
    let header=new Headers();
    header.append('content-type','application/json')
    return this.http.post('http://'+this.u.url+':8080/'+'updateaccount',ob,header).map(resp=>resp.json())
  }

  
}
