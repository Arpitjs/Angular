import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './users.routing';

@NgModule({
  declarations: [ProfileComponent, DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UsersModule { }
