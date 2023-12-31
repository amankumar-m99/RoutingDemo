import { Component, OnInit } from '@angular/core';
 
import { ProductService } from '../product.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
 
export class ProductComponent {
  products?: Product[];
 
  constructor(private productService: ProductService) {}
 
  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}