import { Component, OnInit } from '@angular/core';
import { ProductViewService } from './product-view.service';
import { get } from 'http';
import { product } from '../productmodule';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit{

  productdata:any|[];
  showadd:boolean =true;
  showremove:boolean =false;
  data:any
  constructor(private api :ProductViewService,private activatedroute:ActivatedRoute){}
ngOnInit(): void {
  this.displayproduct();
  
}
displayproduct(){
  this.api.getproduct().subscribe((response : any)=>{
    //this.data = res.products[0].thumbnail;
   this.data = response;
   console.log(response)

  })
}
addtocart(item:product){
  this.api.addtocart(item);

}
removeitem(item:product){
this.api.removecartitem(item);
}
}
