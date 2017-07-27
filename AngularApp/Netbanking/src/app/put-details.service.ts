import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {Url} from './url'

@Injectable()
export class PutDetailsService {

  message: ''
  status: ''
  constructor(public http: Http, public u: Url) {}


  addAccountByUsername(accountType){
    let header = new Headers();
    header.append('content-type', 'application/json');
    console.log("hererererrer");
    console.log(accountType);
    let data ={"accountType":accountType.accountType,"username":localStorage.getItem('username')}
    console.log(JSON.stringify(data))
    console.log(accountType+"acc type"+localStorage.getItem('username'));
    return this.http.post('http://'+this.u.url+':8080/addAccountByUsername', data, header).map(resp => resp.json())
  }
  approveUser(username) {
    let header = new Headers();


    let data = {"username": username}
    console.log(data)



    header.append('content-type', 'application/json');
    return this.http.get('http://'+this.u.url+':8080/approveUser?username='+username, header).map(resp => resp.json())


  }

  saveBeneficiary(request) {
    let header = new Headers();
    header.append('content-type', 'application/json');
    return this.http.put('http://'+this.u.url+':8080/createBeneficiary', request, header).map(resp => resp.json())
  }

}
