import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {productsConfig} from '../config/api.config';

@Injectable()
export class ProductsService {
  products: any[] = [];
  constructor(private http: Http) {}

  getProducts() {
    return this.http.get(productsConfig.productsUrl).map(res => res.json());
  }

  getCategories() {
    return this.http.get(productsConfig.categoriesUrl).map(res => res.json());
  }

  getProductsByCategories(id) {
    return this.http.get(productsConfig.productsByCategoryUrl(id)).map(res => res.json());
  }

  searchProducts(term) {
    return this.products.filter(product => product.name.indexOf(term) > -1);
  }
}
