import { Component } from '@angular/core';
import { AllproductsService } from '../allproducts.service';
import { Brands } from '../brands';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  brands:Brands[]=[]
constructor(private AllproductsService:AllproductsService){
  AllproductsService.brands().subscribe((data)=>{
     console.log(data.data);
     this.brands=data.data
  })
}
}
