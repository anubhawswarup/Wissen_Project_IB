import { DeleteService } from './../delete.service';
import { GetDetailsService } from './../get-details.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UpdateuserService } from './../updateuser.service';
import { User } from '../user';
import { SearchPipePipe } from './../search-pipe.pipe';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
})
export class ManageUsersComponent implements OnInit {

  users: User[];
  userUpdateForm: FormGroup;
  seluser: User;
  deletestatus: string;
  updatestatus: string;
  constructor(private fb: FormBuilder,
  private updateuser: UpdateuserService, 
  private getdetails: GetDetailsService,
  private deleteService: DeleteService) { }

  ngOnInit() {

    this.getdetails.getAllUsers().subscribe(res => {
      this.users = res;
    })


    this.userUpdateForm = this.fb.group({
      userName:[''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      street: [''],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      country: ['', Validators.required],
    })

    this.deletestatus = null
    this.updatestatus = null
  }

  selecting(oneuser: User) {
    //console.log("updating "+oneuser.userName)

  }

  updateUser() {
    //console.log("helloman")
this.users[this.seletedUser].phone= this.userUpdateForm.value.phone
this.users[this.seletedUser].email= this.userUpdateForm.value.email
this.users[this.seletedUser].address.pincode= this.userUpdateForm.value.pincode



    this.updateuser.updateUser(this.userUpdateForm.value).subscribe(
      res=> console.log("updated: "+res.value)
    )

    

  }


  loadUser(oneuser: User) {
    this.seluser = oneuser
  }

  deleteUser(oneuser: User, i: number) {
    console.log("deleted " + oneuser.userName)
    this.seluser = oneuser
    this.deleteService.deleteUser(oneuser.userName).subscribe(res => {
      this.deletestatus = "DELETED SUCCESSFULLY" + oneuser.userName
      console.log(this.deletestatus);
    })
    this.users.splice(i, 1);
  }
seletedUser;

  edituser(oneuser: User, i ) {
    this.seluser = oneuser;
    this.seletedUser = i;

    this.userUpdateForm.patchValue(
      {userName: this.seluser.userName}
    );
    this.userUpdateForm.patchValue(
      {email: this.seluser.email}
    );
    this.userUpdateForm.patchValue(
      {phone: this.seluser.phone}
    );
    this.userUpdateForm.patchValue(
      {street: this.seluser.address.street}
    );
    this.userUpdateForm.patchValue(
      {state: this.seluser.address.state}
    );
    this.userUpdateForm.patchValue(
      {pincode: this.seluser.address.pincode}
    );
    this.userUpdateForm.patchValue(
      {country: this.seluser.address.country}
    );
    

    //console.log(this.userUpdateForm.value)
  }


}
