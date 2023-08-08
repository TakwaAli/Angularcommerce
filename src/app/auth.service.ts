import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _Httpclient:HttpClient,private _Router:Router) { 

    /* if (localStorage.getItem('userToken')!=null) {
      this.saveUserData();
    } */
  }

    // https://route-egypt-api.herokuapp.com/signup

    /* 
     
    Endpoint: /signup
Method: POST
JSON Format:
{
"first_name":"Ahmed",
"last_name":"Ali",
"email": "ahmedAli@gmail.com",
"password":"Ahmed@123",
"age":"23"
}
    */
 


   register(formdata:object):Observable<any>{
    return  this._Httpclient.post(`https://route-egypt-api.herokuapp.com/signup`,formdata);
   
  }
}
