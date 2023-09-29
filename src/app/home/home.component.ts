import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

class Employee2{
  constructor(){

  }

  ok(){
    alert("Class is called")
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  viewProviders:[Employee,Employee2],
  preserveWhitespaces:true//User For preserveWhitespaces html elements mai bich space kai liye
})
export class HomeComponent implements OnInit {


  constructor(private obj:Employee,private obj2:Employee2) { }

  ngOnInit(): void {
    this.obj.show();
    this.obj2.ok();
  }



}
