import { AdminAuthGuard } from './admin-auth.guard';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {CustomerAuthGuard} from './customer-auth.guard';
import {CustomerDashBoardComponent} from './customer-dash-board/customer-dash-board.component';
import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [

  {path: '', loadChildren : './home/home.module#HomeModule'},
  {path: 'customerdashboard', loadChildren : './customer-dash-board/customer-dash-board.module#CustomerDashBoardModule', canActivate : [CustomerAuthGuard]},
  {path: 'admindashboard', loadChildren : './admin-dashboard/admin-dashboard.module#AdminDashboardModule' , canActivate : [AdminAuthGuard]}
]


@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
