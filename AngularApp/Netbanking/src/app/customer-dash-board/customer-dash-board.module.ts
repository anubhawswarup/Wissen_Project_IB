import { AboutUsComponent } from '../about-us/about-us.component';
import { AccountsComponent } from '../accounts/accounts.component';
import { AppModule } from '../app.module';
import { BenificiariesComponent } from '../benificiaries/benificiaries.component';
import { HeaderComponent } from '../header/header.component';
import { HomeModule } from '../home/home.module';
import { LastLogInComponent } from '../last-log-in/last-log-in.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { PaymentComponent } from '../payment/payment.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TransfersComponent } from '../transfers/transfers.component';
import { CustomerDashboardRoutingModule } from './customer-dash-board-routing.module';
import { CustomerDashBoardComponent } from './customer-dash-board.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule , CustomerDashboardRoutingModule, HomeModule, ReactiveFormsModule
  ],
  declarations: [CustomerDashBoardComponent,MyProfileComponent, AccountsComponent,
    BenificiariesComponent,
    PaymentComponent, HeaderComponent, SidebarComponent,
    TransfersComponent, LastLogInComponent ]
})
export class CustomerDashBoardModule { }
