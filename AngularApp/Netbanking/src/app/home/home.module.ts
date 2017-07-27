import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HeaderComponent } from '../header/header.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { LogInComponent } from '../log-in/log-in.component';
import { RegisterComponent } from '../register/register.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from './home.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';





@NgModule({
  imports: [
    CommonModule, HomeRoutingModule, ReactiveFormsModule
  ],
  declarations: [HomeComponent,  ContactUsComponent,  AboutUsComponent, RegisterComponent, LogInComponent,  HomePageComponent]
})
export class HomeModule {}
