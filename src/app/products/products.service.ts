import { Http } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import {productsAPI, categoriesAPI} from '../config/api.config';
import { query } from '@angular/core/src/animation/dsl';
import { Observable } from 'rxjs/Observable';
import { PagerService } from '../services/pager.services';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ProductsService {
  products: any[] = [];
  page = 1;
  limit = 12;
  categoryId: number = undefined;
  searchTerm: String = undefined;
  pager: any;
  productsChange: EventEmitter<any> = new EventEmitter();

  constructor(private http: Http, private pagerService: PagerService, private toastr: ToastrService) {}

  onChangeCategory(categoryId) {
    this.searchTerm = undefined;
    this.categoryId = categoryId;
    this.onSetPage(1);
  }

  onSetPage(page) {
    this.page = page;
    this.getProducts();
  }

  onChangeSearchTerm(term) {
    this.categoryId = undefined;
    this.searchTerm = term;
    this.onSetPage(1);
  }

  getProducts() {
    const queryObject = {
      page: this.page,
      limit: this.limit,
      name: this.searchTerm,
      category_id: this.categoryId
    };
    this.http.get(productsAPI.productsUrl(queryObject)).map(res => res.json()).subscribe(data => {
      this.pager = this.pagerService.getPager(data.total_items, this.page, this.limit);
      this.products = data.products;
      this.productsChange.emit({
        products: this.products,
        pager: this.pager
      });
      return data;
    }, error => this.toastr.error('Cannot get products'));
  }

  getProductById(id) {
    return this.http.get(productsAPI.productUrl(id)).map(res => res.json());
  }

  getCategories() {
    return this.http.get(categoriesAPI.categoriesUrl).map(res => res.json());
  }

  getCategoryById(id) {
    return this.http.get(categoriesAPI.categoryUrl(id)).map(res => res.json());
  }
}
