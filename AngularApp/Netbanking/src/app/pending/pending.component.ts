import { Component, OnInit } from '@angular/core';
import { GetDetailsService } from '../get-details.service';
import {User} from '../user'

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  constructor(public getDetailsService: GetDetailsService) { }
users:User[]
selecteduser
  ngOnInit() {
    this.getDetailsService.getPendingRequests().subscribe(res=>{this.users = res;
    console.log(this.users)})
    this.selecteduser = ''
  }
  updateSelectedUser(u){
    this.selecteduser = u.userName;
  }

}
