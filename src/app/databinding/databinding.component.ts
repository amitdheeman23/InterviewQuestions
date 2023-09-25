import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {

  //Property Binding- one Way binding

  expression='Amit Sharma';
  firstName:string="Mohan";
  IsDisabledClick : boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
