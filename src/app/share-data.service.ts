import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private message=new Subject<String>
  constructor() { }

  sendMsg(){}
}
