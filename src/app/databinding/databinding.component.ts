import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
//Attribute data binding
cols:number=6;
bodr:number=1;
  constructor() { }

  ngOnInit(): void {
  }

}
