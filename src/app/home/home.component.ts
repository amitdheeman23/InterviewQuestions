import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })  This is user with selector 

// @Component({
//   selector: '.app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// }) This used with class 

// @Component({
//   selector: '[apphome]',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// }) Used By Array

@Component({
  selector: '[apphome]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
