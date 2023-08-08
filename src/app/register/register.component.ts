import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  error:string=''
  registerForm:FormGroup= new FormGroup({
    first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    age :new FormControl(null,[Validators.required,Validators.min(16),Validators.max(30)]),
   
  
  });

  constructor(public _Auth:AuthService ,public _Router:Router){

  }
  submitregisterform(registerForm:FormGroup){
    //console.log(registerForm.value);
    
    if(registerForm.valid){
      //console.log("enter");
      
      this._Auth.register(registerForm.value).subscribe((response)=>{
      /* console.log(response);
      console.log("enter"); */
      
         if (response.message == 'success') {
       // console.log("success");
       this._Router.navigate(['login'])
        
       }
       else{
       
        
        this.error=response.message
       // console.log(response.errors.message +"emailerror");
        
       }
        
      })
    }
  }
}
