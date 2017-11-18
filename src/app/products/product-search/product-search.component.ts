import { Component, ElementRef, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  constructor(private el: ElementRef,
              private productService: ProductsService) { }

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'input')
      .map((e: any) => e.target.value)
      .debounceTime(800)
      .subscribe((name: string) => this.productService.onChangeSearchTerm(name));
  }

}
