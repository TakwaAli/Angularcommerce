import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
/* cartitems :any
cart:any[]=[] */
data:any
data2:any
id:string = ''
count:any
index:any
countsettime:any

  constructor(private _cartservices:CartService ,private _activ:ActivatedRoute ){
    
  
  }
  ngOnInit(): void {
    this._cartservices.getcart().subscribe({next:(res)=>{
     
      this.data = res.data
      this.data2 = res.data
      console.log(this.data2.products);
      this._activ.paramMap.subscribe((res)=>{
        this.id =  res.get('id') || ''
      
      })
    }
  
  })


/*   getdata ():any{
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

*/
  }
  deletitem(id:string,index?:any){
  
  
    console.log(index);
    this.data.products.splice(this.index ,1)
      this._cartservices.removeItem(id).subscribe((res)=>{
        this.data = res.data
        this.data2 = res.data
        console.log(this.data2._id);
       this._cartservices.numberofcart.next(res.numOfCartItems)
       
      })
    }
    updateitem(id:string,count:number){

      if(count == 0){
    this.deletitem(id)
      }else{
    clearTimeout(this.countsettime)
    
      this.countsettime =  setTimeout(() => {
     
          this._cartservices.updateCart(id,count).subscribe((res)=>{
            
            this.data = res.data
            this.data2 = res.data
            console.log(res.data);
            
          })
        }, 1000);
       
      }
     
    }

}