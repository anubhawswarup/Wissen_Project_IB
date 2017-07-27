import {AdminDashboardComponent} from './admin-dashboard.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';



const routes: Routes = [

  {path: '', component: AdminDashboardComponent}


]


@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AdminDashboardRoutingModule {}
