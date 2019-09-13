import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class BaseService {
    baseUrl: string = environment.BaseUrl;
    url: string;
    constructor(postfixUrl) {
        this.url = this.baseUrl + postfixUrl + '/';
    }

    getOptions() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
    }
    getOptionsWithToken() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            })
        }
    }
}