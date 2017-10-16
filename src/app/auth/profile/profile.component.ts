import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editMode = false;
  userInfo = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserInfo().subscribe(data => {
      this.userInfo = data;
    });
  }

  onUpdateUserInfo(form: NgForm) {
    const {phone, address} = form.value;
    this.authService.updateUserInfo(phone, address).subscribe(res => this.editMode = false);
  }

  editProfile() {
    this.editMode = true;
  }

  cancelEditing() {
    this.editMode = false;
  }

}
