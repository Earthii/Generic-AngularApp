import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  ping() {
    return this.http.get(this.baseUrl + '/auth');
  }

  register(username: string, password: string) {
    return this.http.post(this.baseUrl + '/auth/register', {
      username: username,
      password: password
    });
  }

  login(username: string, password: string) {
    return this.http.post(this.baseUrl + '/auth/login', {
      username: username,
      password: password
    });
  }
}
