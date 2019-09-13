import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from './../../shared/models/user.model';
// import { Observable } from 'rxjs';

import { BaseService } from './../../shared/services/base.service'


@Injectable()
export class AuthService extends BaseService {
    constructor(public http: HttpClient) {
        super('auth');
    }

    login(data: User) {
        // return Observable.create((observer) => {
        //     this.http.post(this.url + 'login', data, {
        //         headers: new HttpHeaders({
        //             'Content-Type': 'application/json'
        //         })
        //     })
        //         .subscribe(
        //             (data) => {
        //                 observer.next(data);
        //             },
        //             (err) => {
        //                 observer.error(err);
        //             }
        //         )
        // });

        return this.http.post(this.url + 'login', data, this.getOptions());
    }

    register(data: User) {
        return this.http.post(this.url + 'register', data, this.getOptions())
    }

    checkUsername(username: string) {
        return this.http.get(this.url + 'check-username/' + username, this.getOptions());

    }
    forgotPassword(user: User){
        return this.http.post(this.url + 'forgot-password', user, this.getOptions())
    }
    resetPassword(user: User){
        return this.http.post(this.url+ 'reset-password/'+ user.token, user, this.getOptions())
    }
}