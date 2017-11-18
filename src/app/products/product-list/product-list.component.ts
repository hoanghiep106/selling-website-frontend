import { PagerService } from '../../services/pager.services';
import { ProductsService } from '../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  pager: any = {};

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.productsChange.subscribe(data => {
      this.products = data.products;
      this.pager = data.pager;
    });
    this.productService.onSetPage(1);
  }

  setPage(page: number) {
    if (page > 0 && page <= this.pager.totalPages && page !== this.pager.currentPage) {
      this.productService.onSetPage(page);
    }
  }

}
