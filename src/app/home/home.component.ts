import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form!:any;
  constructor() { }

  ngOnInit(): void {
    this.form=new FormGroup({
      email:new FormControl(''),
      contactNos:new FormArray([
        new FormControl(''),
        new FormControl(''),
      ])
    });
  }

  addContactNo(){
    this.form.get('contactNos').push(new FormControl())
  }
  submit(){
    console.log(this.form.get('contactNos').value);
    
  }

  delete(i:number){
    this.form.get('contactNos').removeAt(i)
  }
}

