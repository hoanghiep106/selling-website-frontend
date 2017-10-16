import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import apiConfig from './auth.config';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router, private http: Http) {}

  signupUser(email: string, password: string) {
    this.http.post(apiConfig.signupUrl, {
      email,
      password
    }).subscribe(res => {
      if (res.ok && res.status === 201) {
        this.router.navigate(['/auth/signin']);
      }
    });
  }

  signinUser(email: string, password: string) {
    this.http.post(apiConfig.signinUrl, {
      email,
      password
    }).subscribe(res => {
      if (res.ok && res.status === 200) {
        this.router.navigate(['/']);
        localStorage.setItem('token', res.json().access_token);
      }
    });
  }

  signout() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    return localStorage.getItem('token') != null;
  }
}
