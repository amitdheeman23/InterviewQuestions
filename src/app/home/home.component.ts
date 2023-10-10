import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { signUpform } from './signUpform';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form=new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      address:new FormControl(''),
    });

    this.form.valueChanges.subscribe((uname:signUpform)=>{
      console.log('name',uname.name);
      console.log('email',uname.email);
      console.log('address',uname.address);
      
    })

     this.form.get('email')?.statusChanges.subscribe((status)=>{
      console.log('change_Status',status);
      
     })

  
  }




 
}
