import { Component } from "@angular/core";
import { Router } from '@angular/router';
import {User} from './../../shared/models/user.model'
import {NotifyService} from './../../shared/services/notify.service'
import { AuthService } from '../services/auth.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public submitting: boolean = false;
    public user;
    constructor(
        public router: Router,
        public notifyService: NotifyService,
        public authService: AuthService
    ) {
        this.user = new User({});
    }

    public login() {
        this.authService.login(this.user)
            .subscribe(
                (data: any) => {
                    console.log('data is here >>', data.user);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    
                    this.notifyService.showSuccess('Welcome ' + data.user.username);
                    this.router.navigate(['/user/dashboard']);
                  
                },
                error => {
                    this.notifyService.showError(error);
                }
            )


    }

}

// data binding
// it is communication between view and controller
// three ways of data binding
// 1.event binding ==>(event_name)  we use parenthesis to denote event
// 2.property binding ==[property_name] , property can be disbaled, hidden
// 3.two way data binding ==> synchronization of data between view and controller
// if data changed in controller reflect it in view and vice versa

// revision
// forms module
// data-binding => 3
// template variable
// directive ngForm ngModel
// user interaction
// angular cli generate