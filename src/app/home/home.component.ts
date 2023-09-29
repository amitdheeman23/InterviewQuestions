import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isValid:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  change(valid:boolean){

    this.isValid=valid;
  }

}
