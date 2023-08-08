import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllproductsService {

  constructor(private _httpClient :HttpClient) { }
    Allproducts():Observable<any>{
      return this._httpClient.get(`https://route-ecommerce.onrender.com/api/v1/products`)
    }
    brands():Observable<any>{
      return this._httpClient.get(`https://route-ecommerce.onrender.com/api/v1/brands`)
    }

    productDetail(id:string):Observable<any>{
      return this._httpClient.get(`  https://route-ecommerce.onrender.com/api/v1/products/${id}`)
    }
  
}
