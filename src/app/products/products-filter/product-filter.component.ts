import { ProductsService } from '../products.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories: any[] = [];
  @Output() filterProducts: EventEmitter<any[]> = new EventEmitter();

  constructor(private productService: ProductsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.productService.getCategories().subscribe(data => {
      this.categories = data.categories;
    }, err => {
      this.toastr.error('Cannot get category list');
    });
  }

  changeCategory(categoryId) {
    this.productService.onChangeCategory(categoryId);
  }
}
