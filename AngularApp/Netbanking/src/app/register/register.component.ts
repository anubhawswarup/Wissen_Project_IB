//import {User} from '../user';
import { passwordMatchValidator } from '../custom-validators';
import { RegisterService } from '../register.service';

import 'rxjs/add/operator/debounceTime';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, Validator } from '@angular/forms';
import { Router } from '@angular/router';

function myCustomRangeValidator(min: number, max: number) {
  return function (c: AbstractControl): { [key: string]: boolean } | null {
    if (c.value > min && c.value <= max) {
      return null;
    } else {
      return { "range": true }
    }
  }
}


@Component({
  selector: 'app-sign-up',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //  user: User;
  userSignUpForm: FormGroup;
  errors: string[];
  userNameMessage: string;

  private validationMessages = {
    required: 'This field is required, should be 5',
    minlength: 'This field has minlength error'
  };
  constructor(private fb: FormBuilder, public registerService: RegisterService, public router: Router) { }

  ngOnInit() {
    //    this.user = new User();
    this.userSignUpForm = this.fb.group({

      userName: ['', [Validators.required, Validators.minLength(5)]],
      aadharNum: ['', [Validators.required, Validators.pattern('^.{16}$')]],
      email: ['', [Validators.required, Validators.email]],
      fname: ['', Validators.required],
      gender: ['', Validators.required],
      lname: ['', Validators.required],
      mname: [''],
      pancardNum: ['', Validators.required],


      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],


      address: this.fb.group({
        addressId: [''],
        country: ['', Validators.required],
        pincode: ['', Validators.required],
        state: ['', Validators.required],
        street: ['']
      }, {})


    });
    let userNameControl = this.userSignUpForm.get('userName');
    userNameControl.valueChanges.debounceTime(1000).subscribe(value => {
      console.log(JSON.stringify(value))
      this.setMessage(userNameControl)
    })

  }
  setMessage(c: AbstractControl): void {
    this.userNameMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.userNameMessage = Object.keys(c.errors).map(key =>
        this.validationMessages[key]).join(' ');
    }
  }
  message: string;
  saveUser(event) {
    event.preventDefault();
    console.log(this.userSignUpForm.value)
    console.log(this.userSignUpForm.valid)
    if (this.userSignUpForm.valid) {
      this.registerService.register(this.userSignUpForm.value).subscribe(res => {
        this.registerService.status = res.status;
        this.registerService.message = res.error;
        this.message = res.error;

        console.log(this.registerService.status)
        console.log(res.error)
        if (res.status === 'SUCCESS') {
          localStorage.setItem('isLoggedin', 'true');
          localStorage.setItem('username', this.userSignUpForm.get('userName').value);
          this.router.navigate(['login'])

        }
        else {
          console.log("invalid")
          event.preventDefault();
        }
      });
    }

  }

  checkUser() {

    console.log("get this one")
    console.log(this.userSignUpForm.value)
  }


}
