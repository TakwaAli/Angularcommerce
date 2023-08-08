import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient :HttpClient) { }

  categories():Observable<any>{
    return this._httpClient.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
  }
 
}
