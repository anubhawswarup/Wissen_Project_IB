import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map'
import {Url} from './url'


@Injectable()
export class GetDetailsService {
message = '';
status ='';
  
  constructor(public http:Http, public u:Url) { }



  getAllAccounts(){
    // console.log("getting accounts now")
    return this.http.get('http://'+this.u.url+':8080/' + 'allaccounts').map(resp=>resp.json());
  }

  getAllTransactions(){
    // console.log("getting accounts now")
    return this.http.get('http://'+this.u.url+':8080/' + 'alltransactions').map(resp=>resp.json());
  }

  updateUser(ob:any){
    let header=new Headers();
    header.append('content-type','application/json')
    return this.http.post('http://'+this.u.url+':8080/updateuser',ob,header).map(resp=>resp.json())
  }
  
  getCount(){
    return this.http.get('http://'+this.u.url+':8080/getCount').map(resp => resp.json())
  }
  getCountAccount(){
    return this.http.get('http://'+this.u.url+':8080/getCountOfAccount').map(resp => resp.json())
  }
  getCountSavingAccount(){
    return this.http.get('http://'+this.u.url+':8080/getCountOfSavingAccount').map(resp => resp.json())
  }
  getCountCurrentAccount(){
    return this.http.get('http://'+this.u.url+':8080/getCountOfCurrentAccount').map(resp => resp.json())
  }
  getPendingRequests(){
    return this.http.get('http://'+this.u.url+':8080/getAllPendingUsers').map(resp => resp.json())
  }
  
  getAccountsByUserName(username){ 
    let header = new Headers();
    header.append('content-type','application/json');
    return this.http.get('http://'+this.u.url+':8080/getAccountNumByUserName?username='+username).map(resp => resp.json())
  }
  
  
  getBenByAccount(accid){
    let header = new Headers();
    header.append('content-type','application/json');
    return this.http.get('http://'+this.u.url+':8080/getBeneficiary?accNum='+accid).map(resp => resp.json())
  }
  
  
  getUserDetails(userId){
    return this.http.get('http://'+this.u.url+':8080/user?userName='+userId).map(resp => resp.json())
  }
  getTransactionsByAccount(accid){
    return this.http.get('http://'+this.u.url+':8080/transactionList?accNum='+accid).map(resp => resp.json())
  }

  getAllUsers() {
    console.log("this is it")
    return this.http.get('http://'+this.u.url+':8080/' + 'allusers').map(resp => resp.json());
  }
  
  
}
