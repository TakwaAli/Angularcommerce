import { Component, OnInit } from '@angular/core';
import { AllproductsService } from '../allproducts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  id:string=''
  productDetails:any={}
constructor(private _AllproductsService:AllproductsService,private _ActivatedRoute:ActivatedRoute){}
 

ngOnInit(): void {
  this.id=this._ActivatedRoute.snapshot.params['id']
   this._AllproductsService.productDetail(this.id).subscribe((data)=>{
       //console.log(data.data);
        this.productDetails=data.data
     })
  }

}
