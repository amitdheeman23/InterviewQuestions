import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'practice';

  // pr=new Promise((resolve)=>{
  //   console.log('Amit');

  //   setTimeout(() => {
  //     resolve('Amit');
      
  //   }, 2000);
  // })
  // constructor(){
  //   // this.pr.then((data)=>{
  //   //   console.log('data',data);
      
  //   // });

  //   setTimeout(() => {
  //     this.pr.then((data)=>{
  //       console.log('data',data);
        
  //     });
  //   }, 4000);
  // }

  obj=new Observable((res)=>{
    console.log('Done--');

    setTimeout(() => {
    console.log('Done--Ok');
      
    }, 2000);
  });
  
  constructor(){
    setTimeout(() => {
      this.obj.subscribe((res)=>{
        console.log('Obj--',res);
        
      })
    }, 5000);
   
  }
}
