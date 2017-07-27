import { AboutUsComponent } from '../about-us/about-us.component';
import { AccountsComponent } from '../accounts/accounts.component';
import { BenificiariesComponent } from '../benificiaries/benificiaries.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { PaymentComponent } from '../payment/payment.component';
import { TransfersComponent } from '../transfers/transfers.component';
import { CustomerDashBoardComponent } from './customer-dash-board.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {path: '', component: CustomerDashBoardComponent, 
  children : [

    {path: '', component: MyProfileComponent},
  
    {path:'myprofile', component: MyProfileComponent},
    {path:'accounts', component: AccountsComponent},
    {path:'benificiaries', component: BenificiariesComponent},
    {path:'payment', component: PaymentComponent},
    {path:'transfers', component: TransfersComponent},
    {path:'aboutus', component:AboutUsComponent},
    {path:'contactus', component:ContactUsComponent}
  
  ]}


]

@NgModule({
  imports: [
    CommonModule , RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CustomerDashboardRoutingModule { }
