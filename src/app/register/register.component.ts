import { Component } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent {
  error: string;

  registerForm = this.fb.group(
    {
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required]
    },
    {
      validator: this.confirmPassMatch
    }
  );

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  register() {
    this.error = null;

    const username = this.registerForm.controls['username'].value;
    const password = this.registerForm.controls['password'].value;

    this.authService.register(username, password).subscribe(
      res => {
        // Registration success
        this.router.navigate(['/']);
        console.log(res);
      },
      err => {
        // User name aleady exists
        this.error = err.error;
        console.log(err);
      }
    );
  }

  private confirmPassMatch(c: AbstractControl) {
    if (c.get('password').value !== c.get('confirmPass').value) {
      return { invalid: true };
    }
  }
}
