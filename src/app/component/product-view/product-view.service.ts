import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../productmodule';
import{BehaviorSubject} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ProductViewService {
  protects() {
    throw new Error('Method not implemented.');
  }

  public cartitemlist :any =[];
  public  productlist = new   BehaviorSubject<any> ([])

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://dummyjson.com/products';
  getproduct(){
    return this.http.get<product[]>("https://dummyjson.com/products")
    // return this.http.get<product[]>("https://fakestoreapi.com/products")

    
  }
  getprodcuctby(id:any){
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url); 
    

  }
  addtocart(data:product){
    this.cartitemlist.push(data);
    this.productlist.next (this.cartitemlist); 
console.log(this.cartitemlist)
  }
  protect(){
    return this.productlist.asObservable();
  }
  removecartitem(data:product){
    this.cartitemlist.map((a:product,index:product)=>{
      if(data.id === a.id){
        this.cartitemlist.splice(index,1)
      }
    })
this.productlist.next(this.cartitemlist)
  }

}
