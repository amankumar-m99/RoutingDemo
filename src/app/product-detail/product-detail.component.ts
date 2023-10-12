import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { ProductService } from '../product.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product?: Product;
  id?:any;
  sub?:any

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ){}

  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      console.log(params);
      this.id = params.get('id');
      let products = this._productService.getProducts();
      this.product = products.find((p) => p.productID == this.id);
    });
  }
  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
 
  onBack(): void {
    this._router.navigate(['product']);
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
  
    //You can use this also
    //this.id=this._Activatedroute.snapshot.params['id'];
 
    let products = this._productService.getProducts();
    this.product = products.find((p) => p.productID == this.id);
  }
}
