import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'group15-web';

  constructor(public router: Router) {

  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
  isLoggedIn() {
    return localStorage.getItem('token') ? true : false;
  }

}
