import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from '../../shared/services/notify.service';
import { AuthService } from '../services/auth.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
submitting: boolean = false
user
  constructor(
    public router: Router,
    public notifyService: NotifyService,
    public authService: AuthService
  ) { 
  this.user = new User({})

  }

  ngOnInit() {
  }
  submit(){
    this.submitting = true
    this.authService.forgotPassword(this.user)
    .subscribe(data=>{
      this.notifyService.showInfo('password reset link sent check ur inbox')
      this.router.navigate(['/auth/login'])
    }, err=>{
      this.submitting= false
      this.notifyService.showError(err)
    })
  }

}
