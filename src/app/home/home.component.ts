import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  counteryDetails:any[]=[
    {
      'country':'India',
      'people':[{
        'name':'Amit Kumar',
      },{
        'name':'Mohan Kumar',
      }]
    },
    {
      'country':'UK',
      'people':[{
        'name':'Sohan Kumar',
      },{
        'name':'Pankaj Kumar',
      }]
    }
  ];
  constructor() {}

  ngOnInit(): void {
  }


  getCssClass(flag:any){
    console.log(flag);
    

    let cssClass;
    if(flag=='Amit Kumar'){
     cssClass={
      'one':true,
      'two':true
     } 
    }else{
      cssClass={
        'three':true,
        'one':false,
        'two':false
    
       } 
    }
    return cssClass;


 

  }


}
