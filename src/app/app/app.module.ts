import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastrModule, Toast } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing'
import {AuthModule} from './auth/auth.module'
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import {ItemsModule} from './items/items.module'



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    UsersModule,
    ItemsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// directive is an html element || attr that have special behaviour

// module
// components
// services
// directives
// pipes => if we want to change our data in specific formats
// all above listed terms are class in angular
// 

// decorator
// a decorator is a function that is used to define class using meta data
// decorator are recognized with @prefix
// selector
// meta data
// meta data is an object that is used by decorator to define class

// meta data of modules
// angular framework is composed of different module itself
// fromModule
// httpClientModule
// rotuerMoudle

// angular application needs at least one module to get started
// module is class that defines all the dependants of entire project(application)
// meta data of module
// imports
// ====> imports will contain all the modules
// modules can be three type
// ==> 1 inbuilt module(angular ko dependant module)
// ==> 2 thirdparty module (npmsjs ma vako module)
// ==> 3 own module(sub module of application)
// declarations
// declartion array holds component,directives and pipes
// exports
// exports contain the property of modules that can be exported
// exports can have pipe,directives,components,module
// entryComponents
// ======> all the modals(dailog) that are not covered in routing config
// providers
//  all the services must be kept in providers
// bootstrap
// ====> only root module will have bootstrap
// ======> the component used in bootstrap section is root component


