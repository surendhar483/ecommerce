import { Component, OnInit } from '@angular/core';
import { ProductViewService } from '../product-view/product-view.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  constructor(private api:ProductViewService){}
  public cartitems:number=0;

  
  ngOnInit(): void {
    this.api.protect().subscribe(res=>{
      this.cartitems = res.length;
    })
  }

}
