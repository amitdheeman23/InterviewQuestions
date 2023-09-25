import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
   //Interpolation One-Way binging Start
  name="Amit Kumar"
  firstValue:string="Sumit"
  lastValue:string="Kumar"
  one:number=1;
  two:number=2;
   //Interpolation One-Way binging End//


  constructor() { }

  ngOnInit(): void {
    console.log(this.name);
    
  }

 

}
