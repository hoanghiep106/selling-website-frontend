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
    if (localStorage.getItem('orderId')) {
      if (!this.isShowingCart) {
        this.cartService.getCart().subscribe(res => {
          this.productsInCart = res.products;
          this.totalAmount = res.total_money;
        }, err => {
          this.toastr.error('Get cart fail.');
        });
      } else {
        this.isShowingForm = false;
      }
    } else {
      this.productsInCart = [];
      this.totalAmount = 0;
    }
    this.isShowingCart = !this.isShowingCart;
  }

  closeCart() {
    this.isShowingCart = false;
    this.isShowingForm = false;
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
      this.resetCart();
      this.toastr.success('Order sent. <br>We will contact you asap.');
    }, err => {
      this.toastr.error('Something went wrong. Try again later!');
    });
  }

  resetCart() {
    localStorage.removeItem('orderId');
    this.closeCart();
  }

  numberWithDots(x) {
    if (typeof x === 'number') {
      x = x.toString();
      const pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(x)) {
        x = x.replace(pattern, '$1.$2');
      }
      return x;
    }
  }
}

