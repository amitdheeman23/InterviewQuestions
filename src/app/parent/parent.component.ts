import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  constructor(private shareDataService:ShareDataService) { }
  name="Amit Kumar";
  lists:any=[];

  ngOnInit(): void {
    this.lists=this.shareDataService.getNumber();
  }

  callChildMethod() {
  }


}
