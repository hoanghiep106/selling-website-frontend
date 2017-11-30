import { NgForm } from '@angular/forms/src/directives';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product = {
    _id: '',
    image: '',
    name: '',
    price: null,
    category_name: ''
  };
  valid = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductsService,
              private cartService: CartService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productService.getProductById(params.id).subscribe(product => {
        this.product = product;
      });
    });
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

  addToCart(form: NgForm) {
    if (form.value.quantity) {
      this.valid = true;
      this.cartService.addToCart(this.product._id, form.value.quantity).subscribe(res => {
        console.log(res);
      });
    } else {
      this.valid = false;
    }
  }

}
