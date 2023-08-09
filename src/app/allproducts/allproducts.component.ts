import { Component, OnInit } from '@angular/core';
import { AllproductsService } from '../allproducts.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  products:any[]=[]
  addtocart:any
  id:string=''
  alertcart:boolean=false
  alertmessage:string=""
constructor(private AllproductsService:AllproductsService ,private _cartservices:CartService){
  AllproductsService.Allproducts().subscribe((data)=>{
   console.log(data.data);
     this.products=data.data
  })

}
  ngOnInit(): void {
  // this.AddToCart('')
   //"6428ebc6dc1175abc65ca0b9"
  }
  AddToCart(id:string){
    return  this._cartservices.addToCart(id).subscribe((data)=>{
      console.log(data.data);
       this.addtocart=data
       if (this.alertcart==false) {
        this.alertcart=true
        this.alertmessage=this.addtocart.status
        
       // this.alertcart=false
       }
       //console.log(this.addtocart.status);
       
    })
  }
}
