import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      name:new FormControl('')
    });

    this.form.get('name')?.valueChanges.subscribe((res)=>{
      console.log(res);
      
    })
  }




 
}
