import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifyService } from '../../shared/services/notify.service';
import { AuthService } from '../services/auth.service';
import { User } from '../../shared/models/user.model';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
paramValue
user
submitting: boolean = false
  constructor(
    public router: Router,
    public notifyService: NotifyService,
    public authService: AuthService,
    public activeRoute: ActivatedRoute
  ) {
    this.paramValue = this.activeRoute.snapshot.params['token']
    this.user = new User({})
   }

  ngOnInit() {
  }
submit(){
this.submitting = true
this.user.token = this.paramValue
this.authService.resetPassword(this.user)
.subscribe(data=>{
this.notifyService.showInfo('password reset success, login to continue')
this.submitting = false
},err=>{
  this.submitting = false
  this.notifyService.showError(err)
})
}
}
