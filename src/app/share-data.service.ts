import { Injectable } from '@angular/core';

import { ExapmleService } from "./exapmle.service";

@Injectable({
  providedIn: 'root'
})



export class ShareDataService {
  examplemessag=''
  list:number[]=[100]
  constructor(private exapmleService:ExapmleService) { }


  getmesage(){
    return 'Hello Amit Sharma'
  }

  getMessageFromExampleService(){
    this.examplemessag=this.exapmleService.getOtherMessage();
    return this.examplemessag;
  }


  addNumber(num:number){
    this.list.push(num)
  }

  getNumber(){
    return this.list;
  }

  



}
