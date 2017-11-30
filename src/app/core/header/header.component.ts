import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../products/cart.service';
import { AuthService } from '../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  productsInCart: any[];
  isShowingCart = false;
  isShowingForm = false;
  totalAmount = 0;

  constructor(public authService: AuthService,
              public cartService: CartService,
              public toastr: ToastrService) { }

  ngOnInit() {}

  showCart() {
    if (!this.isShowingCart && localStorage.getItem('orderId')) {
      this.cartService.getCart().subscribe(res => {
        this.productsInCart = res.products;
        this.totalAmount = res.total_money;
      });
    } else {
      this.isShowingForm = false;
    }
    this.isShowingCart = !this.isShowingCart;
  }

  showCheckoutForm() {
    if (localStorage.getItem('orderId')) {
      this.isShowingForm = true;
    } else {
      this.toastr.error('Cart empty');
    }
  }

  onCheckout(f: NgForm) {
    const form = {
      email: f.value.email,
      address: f.value.address,
      phone_number: f.value.phone_number
    };
    this.cartService.checkoutCart(form).subscribe(res => {
      localStorage.removeItem('orderId');
    }, err => {
      this.toastr.error('Something went wrong. Try again later!');
    });
  }
}

