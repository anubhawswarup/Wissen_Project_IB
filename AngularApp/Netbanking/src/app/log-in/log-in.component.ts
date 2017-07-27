import {LogInService} from '../log-in.service';
import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormGroup, Validator, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

import {Md5} from 'ts-md5/dist/md5'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


  loginform: FormGroup
  message: String

  constructor(public loginService: LogInService, private fb: FormBuilder,
    private router: Router) {}

  ngOnInit() {
    this.loginform = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onLoggedin(event) {
    console.log(this.loginform.value);
    this.loginform.patchValue({
      password:Md5.hashStr(this.loginform.value.password+this.loginform.value.userName)
    })
    console.log(this.loginform.value)
    this.loginService.login(this.loginform.value)
      .subscribe(res => {
        console.log(res);
        this.loginService.status = res.status;
        this.loginService.message = res.error;
        this.message = res.error;
        console.log(this.loginService.status)
        console.log(res.error)
        if (res.status === 'FAILED') {
          event.preventDefault();
          this.router.navigate(['/login']);
        }
        else {

          console.log("hello")

         sessionStorage.setItem('isLoggedin', 'true');
          sessionStorage.setItem('username', this.loginform.get('userName').value);
          if(res.role==='ADMIN'){
            sessionStorage.setItem('isadmin','true');
            this.router.navigate(['/admindashboard'])
          }
          else{
            this.router.navigate(['/customerdashboard'])
          }
          console.log(sessionStorage.getItem('isLoggedin'));
           console.log(sessionStorage.getItem('username'));
          
        }
      })
  }



}
