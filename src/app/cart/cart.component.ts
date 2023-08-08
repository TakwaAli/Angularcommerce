import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartitems :any
cart:any[]=[]

  constructor(private _cartservices:CartService){
    
  
  }
  ngOnInit(): void {
     this.getdata()
  }

  getdata ():any{
    return this._cartservices.getLockedUserCart().subscribe((data)=>{
      this.cartitems = Object.values(data);
   
       console.log(this.cartitems[2]);
     
      this.cart= this.cartitems[2].products
       console.log(this.cart);
     
       //this.removeitem(this.cartitems[2]._id)
       
     }
      
      )
    
  } 

  removeitem (id:string){
    this._cartservices.removeItem(id).subscribe((data)=>{
      this.cartitems = Object.values(data);

      console.log(this.cartitems[2]._id);
    
     this.cart=  this.cartitems[2].products
     
     console.log(this.cart);
    })}

    update(id:string,count:number){
      this._cartservices.updateCart(id,count).subscribe((data)=>{
        this.cartitems = Object.values(data);
        
       this.cart=  this.cartitems[2].products
       console.log(count);
       
    })}
}
