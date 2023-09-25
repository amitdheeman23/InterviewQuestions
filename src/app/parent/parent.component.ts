import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) childComponent: ChildComponent | undefined;
  constructor() { }
  name="Amit Kumar"
  ngOnInit(): void {
    // console.log('local',this.Child.name);

  }

  // childToParent(e:any){ get data from child
  //   console.log(e);
    
  // }

  callChildMethod() {
    this.childComponent?.ok();
  }


}
