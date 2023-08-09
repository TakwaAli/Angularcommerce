import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

//   token:any = { this is an object not correct to pass to set method take string 
//     token: localStorage.getItem('userToken')
// }
numberofcart:BehaviorSubject<number>=new BehaviorSubject(0)
token:string = localStorage.getItem('userToken') || ''; 
header=new HttpHeaders().set('Token', this.token);

  constructor(private _httpClient :HttpClient) {

    this.getcart().subscribe((res)=>{
      console.log(res);
      
      this.numberofcart.next(res.numOfCartItems)
      console.log(this.numberofcart.getValue());
    })

   }

   getcart():Observable<any>{
    return  this._httpClient.get(`https://route-ecommerce.onrender.com/api/v1/cart`,
      {
        headers: this.header
    })
    }

  addToCart(product_id:string):Observable<any>{
    return this._httpClient.post(`https://route-ecommerce.onrender.com/api/v1/cart`
    ,{
      productId: product_id
  },
    {headers: this.header})
  }


  getLockedUserCart() {
    return this._httpClient.get(`https://route-ecommerce.onrender.com/api/v1/cart`,
        { headers: this.header })
}


  removeItem(product_id:string):Observable<any>{
    return this._httpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${product_id}`
    , { headers: this.header })
  }

  updateCart(product_id:string, count:number):Observable<any> {
    return this._httpClient. put(`https://route-ecommerce.onrender.com/api/v1/cart/${product_id}`,
        {count:count},
        { headers: this.header }
       
        )
      
}

}
