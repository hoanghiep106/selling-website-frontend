import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const productsRoutes = [
  { path: 'products', component: ProductsComponent, children: [
    { path: ':id', component: ProductDetailsComponent },
    { path: '', component: ProductListComponent, pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
