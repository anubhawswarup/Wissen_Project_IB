import { GetDetailsService } from './../get-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-transactions',
  templateUrl: './manage-transactions.component.html',
  styleUrls: ['./manage-transactions.component.css']
})
export class ManageTransactionsComponent implements OnInit {

  constructor(public getDetails : GetDetailsService) { }

  ngOnInit() {

    this.getDetails.getAllTransactions().subscribe(res=>{console.log(res)})
  }

}
