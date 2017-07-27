import { GetDetailsService } from '../get-details.service';
import { PutDetailsService } from '../put-details.service';

import { DeleteService } from '../delete.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {
  
  
  users:any[]

  constructor(public getDetailsService : GetDetailsService, public putService: PutDetailsService,
              public deleteService: DeleteService) { }

  ngOnInit() {
    
    this.getDetailsService.getPendingRequests().subscribe(res=>{this.users = res;
    console.log(this.users)})
    
  }
  removeUser(i,decision){

    console.log(this.users[i].userName)

    
    if(decision==='reject'){
      this.deleteService.deleteUser(this.users[i].userName).subscribe(res=>{})
    }
    else{
      
    this.putService.approveUser(this.users[i].userName).subscribe(res=>{
    
    console.log(res.error+" "+res.status)
    })
    
  }
  this.users.splice(i,1);
    
  }

}
