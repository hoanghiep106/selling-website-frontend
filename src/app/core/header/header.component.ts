import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }
}

