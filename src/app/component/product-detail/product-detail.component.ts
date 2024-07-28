import { Component, OnInit } from '@angular/core';
import { ProductViewService } from '../product-view/product-view.service';
import { ActivatedRoute } from '@angular/router';
import { product } from '../productmodule';
import { get } from 'http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  productdata: any;
  showadd: boolean = true
  showremove: boolean = false
  constructor(private api: ProductViewService, private Activetedroute: ActivatedRoute) { }
  ngOnInit(): void {
    let productid = this.Activetedroute.snapshot.paramMap.get('productid')
    console.log(productid)
    // console.log("product id is",productid)
    productid && this.api.getprodcuctby(productid).subscribe((res: any) => {

      this.productdata = res;
      console.log(res)
    })
  }

  addtocart(productdata: product) {
    this.showadd = false;
    this.showremove = true;
    this.api.addtocart(productdata)



  }
  removeitem(productdata: product) {
    this.showadd = true;
    this.showremove = false;

    this.api.removecartitem(productdata)
  }
}
