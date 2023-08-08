import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Category } from '../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories:Category[]=[]
constructor(private _productsService:ProductsService){
  _productsService.categories().subscribe((data)=>{
     console.log(data.data);
     this.categories=data.data
  }) 
}
}
