import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['auth/signin']);
    }
    return this.authService.isAuthenticated();
  }
}
