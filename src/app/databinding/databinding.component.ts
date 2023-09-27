import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
//Two way data bainding

data:string="Amit"

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log('ok');
    
  }

  getData(e:any){
    console.log(e.target.value);
    this.data=e.target.value;
    
  }

}
