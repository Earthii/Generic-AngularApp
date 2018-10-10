import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
  error: string;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.error = null;
    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;

    this.authService.login(username, password).subscribe(res => {
      console.log(res);
      this.router.navigate(['/']);
    }, err => {
      this.error = err.error;
    });
  }
}
