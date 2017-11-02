import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {productsConfig} from '../config/api.config';

@Injectable()
export class ProductsService {
  constructor(private http: Http) {}

  getProducts() {
    return this.http.get(productsConfig.getProductsUrl).subscribe(res => console.log(res));
  }
}
