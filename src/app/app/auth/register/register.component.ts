import { Component, OnInit } from '@angular/core';
import {User} from './../../shared/models/user.model'
import { AuthService } from '../services/auth.service';
import {NotifyService} from './../../shared/services/notify.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitting: boolean = false;
  user;
  constructor(
    public authService: AuthService,
    public notifyService: NotifyService,
    public router: Router
  ) {
    this.user = new User({});
  }

  ngOnInit() {
  }

  submit() {
    this.submitting = true;
    this.authService.register(this.user)
      .subscribe(
        (data) => {
          this.notifyService.showSuccess('Registration successfull! please login');
          this.router.navigate(['/auth/login']);
        }, (err) => {
          this.submitting = false;
          this.notifyService.showError(err);
        })
  }

  checkUsername() {
    if (this.user.username) {
      this.authService.checkUsername(this.user.username)
        .subscribe(data => {
          console.log('data .>>', data);
          this.notifyService.showInfo(`provide username: ${this.user.username} already exist`);
        }, error => {
          
        })
    }
  }

  // assume register is service code which will call BE 
  register(data: User) {
    // http call with data 
  }
}
