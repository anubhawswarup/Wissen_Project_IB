import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { GetDetailsService } from '../get-details.service';
import { TransferService } from '../transfer.service';
import { Router } from '@angular/router';
import { OtpService } from '../otp.service'
@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private service: GetDetailsService,
    private transferService: TransferService,
    public router: Router,
    public otpService: OtpService
  ) { }

  transferForm: FormGroup;
  accounts: Array<any> = [];
  benAccounts: Array<any> = [];
  fromAccount: any;
  response: any;
  show: boolean;
  errormessage: string;
  OtpForm: FormGroup;
  ngOnInit() {

    this.transferForm = this.fb.group({
      fromAccount: ['#'],
      toAccount: ['#', this.toAccountValidate],
      amount: ['', Validators.required],
      description: ['']
    });

    this.OtpForm = this.fb.group({
      otp: []
    });

    this.service.getAccountsByUserName(sessionStorage.getItem('username')).subscribe(res => this.accounts = res);
    this.transferForm.get("fromAccount").valueChanges.subscribe(res => {
      this.fromAccount = res;
      if (res != '#') {
        this.show = true;
      } else {
        this.show = false;
      }
      console.log("getBenByAcc");
      this.service.getBenByAccount(this.fromAccount).subscribe(res1 => { this.benAccounts = res1; console.log(res1); });
      console.log("1" + res);
      console.log("2" + this.benAccounts);
    });


  }
  result: any;
  phone_number: any = '-1';
  session_id;
  save(event) {
    console.log("here save called");
    if (this.transferForm.valid) {
      event.preventDefault();
      var userName = sessionStorage.getItem('username');
      this.service.getUserDetails(userName).subscribe(out => {
        this.phone_number = out.phone;
      });

      if (this.phone_number !== '-1') {
        this.otpService.sendOtp(this.phone_number).subscribe(res => {
          this.result = res;
          if (this.result.Status === 'Success') {
            document.getElementById("modalbtn").click();
            this.session_id=this.result.Details;
            console.log("Success");
            this.phone_number=-1;
          } else {
            console.log("failed");
          }

        });
      }
      
      // this.transferService.transfer(this.transferForm.value).subscribe(res => {
      // this.response = res; console.log(res);
      // this.errormessage = res.error

      //   if (res.status === 'FAILED') {
      //     event.preventDefault();

      //   } else {
      //       this.router.navigate(['customerdashboard'])
      //   }

      // });
    }
  }

  toAccountValidate(c: AbstractControl): { [key: string]: boolean } | null {
    if (c.value == '#')
      return { toAccount: true };
    return null;
  }
  transfer(event) {
    console.log("transfer method")
    event.preventDefault();
    this.otpService.validateOtp(this.session_id,this.OtpForm.get('otp').value).subscribe(res=>{
     console.log(res);
     if(res.Status==='Error'){

     }else{
        this.transferService.transfer(this.transferForm.value).subscribe(res => {
      this.response = res; console.log(res);
      this.errormessage = res.error

        if (res.status === 'FAILED') {
          event.preventDefault();

        } else {
          document.getElementById("modalbtn").click();
            this.router.navigate(['/customerdashboard'])
        }

      });



     }

    });
  }

}
