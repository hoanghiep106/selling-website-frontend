import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: any;
  defaultImageUrl: String = 'https://cdn0.iconfinder.com/data/icons/thin-home-living/57/thin-477_t_shirt_clothes-512.png';

  constructor() { }

  ngOnInit() {
  }

}
