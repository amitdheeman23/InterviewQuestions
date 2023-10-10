import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormArray, Validators } from '@angular/forms';
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
    const array=new FormArray([
      new FormControl('Amit'),
      new FormControl('Smarma'),
      new FormControl('Bd'),
    ]);


    array.patchValue(['Kumar','ji'])
    
    console.log(array.value);
    console.log(array.status);//


    
  }}