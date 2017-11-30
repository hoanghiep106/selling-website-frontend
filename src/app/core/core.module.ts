import { FormsModule } from '@angular/forms';
import { CartService } from './../products/cart.service';
import { ProductsService } from '../products/products.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [AuthService, AuthGuard, ProductsService, CartService]
})
export class CoreModule {}
