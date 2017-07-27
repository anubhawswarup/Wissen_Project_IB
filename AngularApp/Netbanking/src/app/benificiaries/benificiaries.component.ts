import {DeleteService} from '../delete.service';
import {GetDetailsService} from '../get-details.service';
import {PutDetailsService} from '../put-details.service';
import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-benificiaries',
  templateUrl: './benificiaries.component.html',
  styleUrls: ['./benificiaries.component.css']
})
export class BenificiariesComponent implements OnInit {

  accounts: any[];
  ben;
  beneficiaryform: FormGroup
  isAccountSelected = false;
  selectedAccount: string;
  errormessage: string;
  selectedBeneficiary: string;
  constructor(private getdetailsservice: GetDetailsService,
    private fb: FormBuilder,
    public putService: PutDetailsService,
    public router: Router,
    private deleteService: DeleteService) {}


  ngOnInit() {
    this.errormessage = ''
    this.selectedAccount = ''
    this.beneficiaryform = this.fb.group({
      userName: ['', Validators.required],
      toAccount: ['', Validators.required],
      fromAccount: [this.selectedAccount]
    })

    this.getdetailsservice.getAccountsByUserName(sessionStorage.getItem('username')).subscribe(res => {

      console.log(res);

      this.accounts = res;
    })
  }
  select(selectedValue) {
    console.log(selectedValue);
    this.isAccountSelected = true;
    this.selectedAccount = selectedValue;
    this.ben = [];
    this.getdetailsservice.getBenByAccount(selectedValue).subscribe(res => {
      console.log("ben");

      this.ben = res;
      console.log(this.ben)
    })
  }
  updateSelectedBeneficiary(beneficiary) {
    this.selectedBeneficiary = beneficiary;
  }
  deleteBen() {
    this.deleteService.deleteBeneficiary(this.selectedAccount, this.selectedBeneficiary).subscribe(res => {
      console.log("ppp")
      console.log(this.ben)
      this.ben = this.ben.filter(item => item.accountNum !== this.selectedBeneficiary);

    })
  }

  saveBen(event) {
    //event.preventDefault();
    this.errormessage = ''
    this.beneficiaryform.value.fromAccount = this.selectedAccount
    console.log(this.beneficiaryform.value);
    this.putService.saveBeneficiary(this.beneficiaryform.value)
      .subscribe(res => {
        this.putService.status = res.status;
        this.putService.message = res.error;
        this.errormessage = res.error;
        console.log(this.putService.status)
        console.log(res.error)
        if (res.status === 'FAILED') {
          event.preventDefault();

        }
        else {
        this.ben.push({accountNum:this.beneficiaryform.get("toAccount").value, userName:this.beneficiaryform.get("userName").value});


         // this.router.navigate(['/benificiaries'])

        }
      })

  }

}
