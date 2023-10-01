import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // trackByFunction(index: number, item: any): number {
  //   return item.id; // Use a unique identifier, such as item's ID
  // }
  students:any[]=[]


  constructor() {
    this.students=[
      {
        'name':"Rahul",id:1
      },   {
        'name':"Ajeet",id:2
      },   {
        'name':"Rohan",id:3
      },   {
        'name':"Mahesh",id:4
      },   {
        'name':"Pankaj",id:5
      },
    ];
  
   }

  ngOnInit(): void {
  }

  trackByFunction(index:number,item:any):string{
    // console.log('line---',d);
    
    return item.id
  }

  clickOn(){
    this.items.push({
      'name':"Kamal",id:6
    })
  }


}
