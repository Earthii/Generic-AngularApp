import { HttpClient } from '@angular/common/http';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout().subscribe(res => {
      console.log('User Logged out: ' + res);
    });
  }

  content() {
    this.http.get('http://localhost:3000/content').subscribe(data => {
      console.log('Content if authed' + data);
    });
  }
}
