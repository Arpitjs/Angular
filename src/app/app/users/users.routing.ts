import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const userRouting: Routes = [{
    path: 'profile',
    component: ProfileComponent
},
{
    path: 'dashboard',
    component: DashboardComponent
}]

@NgModule({
    imports: [RouterModule.forChild(userRouting)],
    exports: [RouterModule]
})
export class UserRoutingModule {

}