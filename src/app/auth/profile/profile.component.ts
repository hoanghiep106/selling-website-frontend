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
  loading = false;

  constructor(private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.loading = true;
    this.authService.getUserInfo().subscribe(data => {
      this.userInfo = data;
      this.loading = false;
    }, err => {
      this.toastr.error('Get user profile fail');
      this.loading = false;
    });
  }

  onUpdateUserInfo(form: NgForm) {
    const {phone, address} = form.value;
    this.loading = true;
    this.authService.updateUserInfo(phone, address).subscribe(res => {
      this.editMode = false;
      this.toastr.success('User profile updated');
      this.loading = false;
      this.fetchData();
    }, err => {
      this.toastr.error('Update user profile fail');
      this.loading = false;
    });
  }

  editProfile() {
    this.editMode = true;
  }

  cancelEditing() {
    this.editMode = false;
  }

}
