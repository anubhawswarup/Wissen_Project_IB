import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Url} from './url'
@Injectable()
export class TransferService {

  constructor(private http: Http, public u : Url) { }


  transfer(transferRequest) {
    let header = new Headers();
    header.append('content-type', 'application/json');
    console.log(transferRequest);
    return this.http.put('http://'+this.u.url+':8080/transfer', transferRequest, header).map(res => res.json());

  }
}
