import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ExapmleService {

  constructor() { }

  getOtherMessage(){
   return 'Message from example service'
  }
}
