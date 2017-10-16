import { HttpModule } from '@angular/http';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpModule
  ]
})
export class AuthModule {}
