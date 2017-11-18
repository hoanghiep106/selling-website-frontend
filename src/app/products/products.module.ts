import { ProductFilterComponent } from './products-filter/product-filter.component';
import { ProductsRoutingModule } from './products-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PagerService } from '../services/pager.services';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductSearchComponent,
    ProductFilterComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ProductsRoutingModule
  ],
  providers: [PagerService]
})
export class ProductsModule {}
