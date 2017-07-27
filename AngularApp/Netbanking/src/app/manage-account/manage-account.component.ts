
import { GetDetailsService } from './../get-details.service';

import { UpdateuserService } from './../updateuser.service';
import { DeleteService } from '../delete.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {

  accounts:any = [];
  accountUpdateForm:FormGroup;
  selacc:any;
  constructor(private getdetails : GetDetailsService,public deleteservice : DeleteService,
  private fb: FormBuilder,
  private updateuser:UpdateuserService) { }
  deletestatus:string;
  updatestatus:string;

  ngOnInit() {
    this.getdetails.getAllAccounts().subscribe(res => {
       this.accounts = res;
    })


    this.accountUpdateForm = this.fb.group({
      userName:[''],
      type: ['', [Validators.required, Validators.email]],
      accNum: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      balance: [''],
      //openingDate: ['', Validators.required],
    })



  }

  // deleteAccount(oneacc: any, i: number) {
  //   console.log("deleted " + oneacc.acc_num)
  //   this.selacc = oneacc


  //   // this.deleteacc.deleteOneUser(selacc.userName).subscribe(res => {
  //   //   this.deletestatus = "DELETED SUCCESSFULLY" + oneuser.userName
  //   //   console.log(this.deletestatus);
  //   // })
  //   // this.users.splice(i, 1);
  // }


  updateAccount() {
    this.updateuser.updateAccount(this.accountUpdateForm.value).subscribe(
      res=> console.log("updated: "+res)
    )
  }


  loadAccount(oneacc: any) {
    this.selacc = oneacc
  }

  deleteAccount(oneacc: any, i: number) {
    console.log("deleted " + oneacc.accountNumber)
    this.selacc = oneacc
    this.deleteservice.deleteOneAccount(oneacc.accountNumber).subscribe(res => {
      this.deletestatus = "DELETED SUCCESSFULLY" + oneacc.accountNumber
      console.log(this.deletestatus);
    })
    this.accounts.splice(i, 1);
  }


  editAccount(oneacc: any) {
    this.selacc = oneacc;

    console.log(this.selacc)

    this.accountUpdateForm.patchValue(
      {accNum: this.selacc.accNum}
    );
    this.accountUpdateForm.patchValue(
      {type: this.selacc.type}
    );
    this.accountUpdateForm.patchValue(
      {balance: this.selacc.balance}
    );
    this.accountUpdateForm.patchValue(
      {userName: this.selacc.user.userName}
    );
    
    console.log(this.accountUpdateForm.value)
  }

}
