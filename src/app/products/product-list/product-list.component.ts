import { PagerService } from '../../services/pager.services';
import { ProductsService } from '../products.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  pager: any = {};
  loading = false;

  constructor(private productService: ProductsService, private toastr: ToastrService) { }

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
