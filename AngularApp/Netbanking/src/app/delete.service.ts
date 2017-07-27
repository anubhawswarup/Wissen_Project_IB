import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import {Url} from './url'

@Injectable()
export class DeleteService {

  constructor(public http: Http, public u : Url) { }


  deleteOneAccount(accountnumber){
    return this.http.get('http://'+this.u.url+':8080/'+'deleteaccount/?accNum=' + accountnumber).map(resp => resp.json())
  }


  deleteBeneficiary(account, benid) {
    let header = new Headers();
    header.append('content-type', 'application/json');
    //console.log(reqbody)
    console.log("Method called")
    return this.http.get('http://'+this.u.url+':8080/deleteBeneficiary?account=' + account + "&benId=" + benid)
      .map(resp => { resp.json(); console.log(resp.json()); })
  }
  deleteUser(username) {
    let header = new Headers();
    header.append('content-type', 'application/json');
    //console.log(reqbody)
    console.log("Method called")
    return this.http.delete('http://10.1.16.84:8080/deleteUser?username=' +username )
      .map(resp => { resp.json(); console.log(resp.json()); })
  }
}
