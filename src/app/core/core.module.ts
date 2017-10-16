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
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [AuthService, AuthGuard, ProductsService]
})
export class CoreModule {}
