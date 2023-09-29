import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',
  template:`<h1>Hello</h1>
  Amit`,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
