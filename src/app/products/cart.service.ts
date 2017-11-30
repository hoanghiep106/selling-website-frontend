import { cartAPI } from './../config/api.config';
import { Http } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CartService {
  products: any;
  cartChange: EventEmitter<any> = new EventEmitter();

  constructor(private http: Http) {}

  getCart() {
    return this.http.get(cartAPI.getCartUrl(localStorage.getItem('orderId'))).map(res => {
      this.products = res.json().products;
      console.log(res.json());
      return res.json();
    });
  }

  addToCart(productID, quantity) {
    const orderId = parseInt(localStorage.getItem('orderId'), 10);
    if (orderId) {
      return this.http.post(cartAPI.addToCartUrl, {
        product_id: productID,
        quantity,
        order_id: orderId
      }).map(res => {
        return res.json();
      });
    } else {
      return this.http.post(cartAPI.addToCartUrl, {
        product_id: productID,
        quantity
      }).map(res => {
        localStorage.setItem('orderId', res.json().order_id);
        return res.json();
      });
    }
  }

  removeFromCart(productID) {
    return this.http.delete(cartAPI.removeFromCartUrl(productID)).map(res => res.json());
  }

  checkoutCart(form) {
    return this.http.post(cartAPI.checkoutUrl(localStorage.getItem('orderId')), form).map(res => res.json());
  }

}
