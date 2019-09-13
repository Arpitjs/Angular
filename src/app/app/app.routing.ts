import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'user',
        loadChildren: './users/users.module#UsersModule'
    },
    {
        path: 'item',
        loadChildren: './items/items.module#ItemsModule'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

// routing in angular
// routerModule
// routing configuration types routes
// object with path and component
// placeholder in root file <router-outlet></router-outlet>
// routerLink attribute used for navigation in templates
// router // controller navigation helper