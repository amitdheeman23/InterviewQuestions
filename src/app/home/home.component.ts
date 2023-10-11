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
  }

  onSubmit(e:any){
    
  }
}

