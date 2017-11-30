import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editMode = false;
  userInfo = {};

  constructor(private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.authService.getUserInfo().subscribe(data => {
      this.userInfo = data;
    }, err => {
      this.toastr.error('Get user profile fail');
    });
  }

  onUpdateUserInfo(form: NgForm) {
    const {phone, address} = form.value;
    this.authService.updateUserInfo(phone, address).subscribe(res => {
      this.editMode = false;
      this.toastr.success('User profile updated');
      this.fetchData();
    }, err => {
      this.toastr.error('Update user profile fail');
    });
  }

  editProfile() {
    this.editMode = true;
  }

  cancelEditing() {
    this.editMode = false;
  }

}
