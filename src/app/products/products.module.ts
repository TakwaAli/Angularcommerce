import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
  
  
    CategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
