import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from './notfound/notfound.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'',redirectTo:"products",pathMatch:'full'},
  {path:"products",component:AllproductsComponent},
  {
    path: 'category',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {path:'brands',component:BrandsComponent},
  {path:'cart',component:CartComponent},
  {path:'details/:id',component:ProductDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'sign',component:RegisterComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
