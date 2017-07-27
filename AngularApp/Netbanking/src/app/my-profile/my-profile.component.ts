import { Component, OnInit } from '@angular/core';
import { GetDetailsService } from '../get-details.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ChangeDetailsService } from '../change-details.service';


import { Md5 } from 'ts-md5/dist/md5'
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user: any;
  passwordGroup: FormGroup;
  userUpdateForm: FormGroup;
  seluser;

  constructor(public service: GetDetailsService, public fb: FormBuilder, public passService: ChangeDetailsService) { }

  ngOnInit() {

    this.passwordGroup = this.fb.group({
      oldPassword: ['', Validators.required],
      cpasswordGroup: this.fb.group({
        newPassword: ['', Validators.required],
        cnewPassword: ['', Validators.required]
      }, { validator: this.checkPassword })
    });
    this.userUpdateForm = this.fb.group({
      userName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      street: [''],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      country: ['', Validators.required],
    })


    this.service.getUserDetails(sessionStorage.getItem('username')).subscribe(user => { this.user = user; console.log(user); this.edituser(user); });

  }
  res;
  savePassword(event) {
    event.preventDefault();
    //console.log(this.passwordGroup.value);
    
    
     this.passwordGroup.value.oldPassword
    =Md5.hashStr(this.passwordGroup.value.oldPassword + sessionStorage.getItem('username'));

    this.passwordGroup.value.cpasswordGroup.newPassword
    =Md5.hashStr(this.passwordGroup.value.cpasswordGroup.newPassword + sessionStorage.getItem('username'));

    
    this.passwordGroup.value.username = sessionStorage.getItem('username');
    console.log(this.passwordGroup.value.username+"   "+sessionStorage.getItem('username'))
console.log(this.passwordGroup.value)
    this.passService.changePassword(this.passwordGroup.value).subscribe(res => { this.res = res; });
  }

  updateUser() {
    //console.log("helloman")
    console.log(this.userUpdateForm.value);

    console.log(this.userUpdateForm.value)
    this.service.updateUser(this.userUpdateForm.value).subscribe(
      res => console.log("updated: " + res.value)
    )
  }

  checkPassword(c: AbstractControl): { [key: string]: boolean } | null {

    if (c.get('newPassword').value !== c.get('cnewPassword').value)
      return { 'match': true }
    return null;
  }
  edituser(oneuser: any) {
    this.seluser = oneuser;

    this.userUpdateForm.patchValue(
      { userName: this.seluser.userName }
    );
    this.userUpdateForm.patchValue(
      { email: this.seluser.email }
    );
    this.userUpdateForm.patchValue(
      { phone: this.seluser.phone }
    );
    this.userUpdateForm.patchValue(
      { street: this.seluser.address.street }
    );
    this.userUpdateForm.patchValue(
      { state: this.seluser.address.state }
    );
    this.userUpdateForm.patchValue(
      { pincode: this.seluser.address.pincode }
    );
    this.userUpdateForm.patchValue(
      { country: this.seluser.address.country }
    );


  }
}