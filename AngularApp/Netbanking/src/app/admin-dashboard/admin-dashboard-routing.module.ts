
import {PendingRequestsComponent} from '../pending-requests/pending-requests.component';
import {ManageUsersComponent} from '../manage-users/manage-users.component'
import {AdminDashboardComponent} from './admin-dashboard.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAccountsViewComponent} from '../admin-accounts-view/admin-accounts-view.component'
import {Routes, RouterModule} from '@angular/router';
import {ManageAccountComponent} from '../manage-account/manage-account.component'
import {ManageTransactionsComponent} from '../manage-transactions/manage-transactions.component'
import {PendingComponent} from '../pending/pending.component'
import {AdminDashBoardViewComponent} from '../admin-dash-board-view/admin-dash-board-view.component'

import {UserResolverService} from '../user-resolver.service'

const routes: Routes = [
{
    path: '', component: AdminDashboardComponent, 
    children: [
      {path:'', component:AdminDashBoardViewComponent,resolve:{
          res:UserResolverService
        }},

      {path: 'admindashboard', component: AdminDashBoardViewComponent},
      {path: 'pendingrequests', component: PendingRequestsComponent},
      {path: 'manageusers', component: ManageUsersComponent}, 
      {path:'manageaccounts', component: ManageAccountComponent},
      {path:'managetransactions', component: ManageTransactionsComponent}

    ]
  }
]


@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AdminDashboardRoutingModule {}
