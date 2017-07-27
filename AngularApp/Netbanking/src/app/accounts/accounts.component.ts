import { GetDetailsService } from '../get-details.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import * as FileSaver from 'file-saver';
import {FormGroup, FormBuilder} from '@angular/forms'
import {PutDetailsService} from '../put-details.service'

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  transactionButtonValue: string;
  isAccountSelected: boolean;
  selectedAccount;
accountform : FormGroup
  accounts: any[];
  constructor(public getdetailsservice: GetDetailsService, 
  private putDetailsService: PutDetailsService,
  private fb: FormBuilder) { }
  transactions: any[];
  jsPDF;
  ngOnInit() {
    this.accountform = this.fb.group({
      accountType:['']
    })
    
    this.transactionButtonValue = 'View Transactions'
    this.isAccountSelected = false;
    this.getdetailsservice.getAccountsByUserName(sessionStorage.getItem('username')).subscribe(res => {

      console.log(res);

      this.accounts = res;
    })
  }

  saveAccount(){
    console.log(this.accountform.get('accountType'))
    this.putDetailsService.addAccountByUsername(this.accountform.value).subscribe(res=>{
      
      
      
      console.log(res)
      this.accounts.push(res)
    
  }
      
      );
  }
  onDownload(accountNum) {
    this.getdetailsservice.getTransactionsByAccount(accountNum).subscribe(
      (response) => { // download file    
        var csvData = this.ConvertToCSV(response);
        var blob = new Blob([csvData], { type: 'text/text' });
        var fileName = "MyFile.csv";
        FileSaver.saveAs(blob, fileName);

        /*var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var url= window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'SampleExport.csv';
        a.click();*/
      });

  }
  ConvertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    var row = "";
    //console.log(array)
    //console.log(objArray[0])
    for (var index in objArray[0]) {
      //Now convert each value to string and comma-separated
      row += index + ',';
    }
    //console.log(row);
    row = row.slice(0, -1);
    //append Label row with line break
    str += row + '\r\n';
    //console.log(str)
    for (var i = 0; i < array.length; i++) {
      var line = '';
      line += array[i].tranferId + ','
      line += array[i].amount + ','
      line += array[i].timeStamp + ','
      line += array[i].fromAccount.accNum + ','
      line += array[i].toAccount.accNum + ','
      line += array[i].description
      /*for (var index in array[i]) {
          if (line != '') line += ','
          console.log(index)
          line += array[i][index];
      }*/
      str += line + '\r\n';
    }
    return str;
  }

  onAccountSelected(accountNum) {
    if (this.isAccountSelected === true) {
      this.isAccountSelected = false;
      this.transactionButtonValue = 'View Transactions'
    }
    else {
      this.isAccountSelected = true;
      this.selectedAccount = accountNum;
      this.transactionButtonValue = 'Hide Transactions'
      this.getdetailsservice.getTransactionsByAccount(accountNum).subscribe(res => {

        this.transactions = res;

      });
    }
  }
}
