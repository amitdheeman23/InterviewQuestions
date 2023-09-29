import { Component, OnInit,HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
// HotListener -------------
clickStatus = "";



constructor(private el: ElementRef){

}

  ngOnInit(): void {
  }
  @HostListener("document:click", ["$event"]) outClickHandler(e: MouseEvent) {
    if (this.el.nativeElement.contains(e.target)) {
      this.clickStatus = "inside click";
    } else {
      this.clickStatus = "outside click";
    }
  }







 
}
