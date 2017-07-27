import { TransactionsearchPipe } from './../transactionsearch.pipe';
import { DebitaccpipePipe } from './../debitaccpipe.pipe';
import { CreditaccpipePipe } from './../creditaccpipe.pipe';
import { AccountsearchPipe } from './../accountsearch.pipe';
import { UsernamesearchPipe } from './../usernamesearch.pipe';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { CustomerDashBoardModule } from '../customer-dash-board/customer-dash-board.module';
import { HeaderComponent } from '../header/header.component';
import { HomeModule } from '../home/home.module';
import { PendingRequestsComponent } from '../pending-requests/pending-requests.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {ManageUsersComponent} from '../manage-users/manage-users.component'
import {ManageAccountComponent} from '../manage-account/manage-account.component'
import {ManageTransactionsComponent} from '../manage-transactions/manage-transactions.component'
import {AdminAccountsViewComponent} from '../admin-accounts-view/admin-accounts-view.component'
import {PendingComponent} from '../pending/pending.component'
import {SearchPipePipe} from '../search-pipe.pipe'
import {PinsearchpipePipe} from '../pinsearchpipe.pipe'
import { ChartsModule } from 'ng2-charts';
import {AdminDashBoardViewComponent} from '../admin-dash-board-view/admin-dash-board-view.component'


@NgModule({
  imports: [
    CommonModule , AdminDashboardRoutingModule, HomeModule, ReactiveFormsModule, FormsModule, ChartsModule
  ],
  declarations: [AdminDashboardComponent, AdminHeaderComponent,ManageUsersComponent,
  AdminSidebarComponent, PendingRequestsComponent,  AdminAccountsViewComponent, 
  ManageAccountComponent, ManageTransactionsComponent, PendingComponent,AdminAccountsViewComponent,AdminDashBoardViewComponent,
  SearchPipePipe,PinsearchpipePipe, UsernamesearchPipe, AccountsearchPipe, 
  CreditaccpipePipe, DebitaccpipePipe ,TransactionsearchPipe]
})
export class AdminDashboardModule { }
