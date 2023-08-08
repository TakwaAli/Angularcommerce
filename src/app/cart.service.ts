import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

//   token:any = { this is an object not correct to pass to set method take string 
//     token: localStorage.getItem('userToken')
// }
token:string = localStorage.getItem('userToken') || ''; 
header=new HttpHeaders().set('Token', this.token);
  constructor(private _httpClient :HttpClient) { }
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
    return this._httpClient. delete(`https://route-ecommerce.onrender.com/api/v1/cart/${product_id}`,
   
        { headers: this.header }
       
        )
      
}

}
