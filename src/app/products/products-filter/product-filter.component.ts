import { ProductsService } from '../products.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories: any[] = [];
  @Output() productsChange: EventEmitter<any[]> = new EventEmitter();

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getCategories().subscribe(data => {
      this.categories = data.categories;
    });
  }

  getAllProducts() {
    this.productService.getProducts().subscribe(data => {
      this.productsChange.emit(data.products);
    });
  }

  getProductsByCategory(id) {
    this.productService.getProductsByCategories(id).subscribe(data => {
      this.productsChange.emit(data.products);
    });
  }
}
