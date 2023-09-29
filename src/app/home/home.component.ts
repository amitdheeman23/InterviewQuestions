import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  inputs:['data'],
  outputs:['chiledEvent']
})
export class HomeComponent implements OnInit {
  data:any;
  chiledEvent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  onChange(e:any){
    this.chiledEvent.emit(e);
  }
  

}
