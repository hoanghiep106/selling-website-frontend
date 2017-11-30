import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showProductDetail() {
    this.router.navigate(['products', this.product._id]);
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
