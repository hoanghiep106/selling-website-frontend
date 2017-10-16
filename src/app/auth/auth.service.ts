import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import { EventEmitter, Injectable, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/map';

import {authConfig} from '../config/api.config';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router, private http: Http, private toastr: ToastrService) {}

  signupUser(email: string, password: string) {
    this.http.post(authConfig.signupUrl, {
      email,
      password
    }).subscribe(res => {
      if (res.ok && res.status === 201) {
        this.toastr.success('Sign up successfully! Please sign in!');
        this.router.navigate(['/auth/signin']);
      }
    }, err => {
      this.toastr.error(`Signing up failed! ${err.status} ${err.json().msg}`);
    });
  }

  signinUser(email: string, password: string) {
    this.http.post(authConfig.signinUrl, {
      email,
      password
    }).subscribe(res => {
      if (res.ok && res.status === 200) {
        this.toastr.success(`Hi, ${email}`);
        this.router.navigate(['/']);
        localStorage.setItem('token', res.json().access_token);
      }
    }, err => {
      this.toastr.error(`Signing in failed! ${err.status} ${err.json().msg}`);
    });
  }

  getToken() {
    return localStorage.getItem('token');
  }

  createAuthorizationHeader() {
    const headers = new Headers();
    headers.set('Authorization', 'Bearer ' + this.getToken());
    return headers;
  }

  getUserInfo() {
    const headers = this.createAuthorizationHeader();
    return this.http.get(authConfig.profileUrl, {
      headers
    }).map(res => {
      if (res.status === 200) {
        return res.json();
      }
    });
  }

  updateUserInfo(phone: string, address: string) {
    const headers = this.createAuthorizationHeader();
    return this.http.put(authConfig.profileUrl, {
      phone,
      address
    }, {
      headers
    }).map(res => {
      if (res.status === 200) {
        this.toastr.success('User info updated');
      }
      return res.json();
    });
  }

  signout() {
    this.router.navigate(['/']);
    localStorage.removeItem('token');
  }

  isAuthenticated() {
    return localStorage.getItem('token') != null;
  }
}
