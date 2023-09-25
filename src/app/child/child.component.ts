import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }
  // @Input('item') data:any; This use for get deta from parent component
  // @Output() childToParent = new EventEmitter<String>(); this is use for data share child component to parent component.

  name="Amit Sharma ji"
  ngOnInit(): void {
  }


  // dateSendToParents(){ This method use for send data to parent component
  //   this.childToParent.emit('Ammmmmmm')
  // }


  ok(){
    console.log(this.name);
    
  }



}
