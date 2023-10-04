import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // providers:[ShareDataService]

})
export class HomeComponent implements OnInit {

  empList: any[] = [
    { code: 'emp001', name: "Amit", salary: 100, dob: '01/02/1995', gender: "male" },
    { code: 'emp002', name: "Sonam", salary: 1000, dob: '01/02/1996', gender: "female" },
    { code: 'emp003', name: "Mona", salary: 10000, dob: '01/02/1999', gender: "female" },
    { code: 'emp004', name: "Pankaj", salary: 100.2, dob: '01/02/1993', gender: "male" },

  ];
  little='';
  otherMsg=''
  lists:any=[];

  constructor(private shareDataService:ShareDataService) { }

  ngOnInit(): void {
   console.log('shareDataService',this.shareDataService.getmesage());
   this.little=this.shareDataService.getmesage()
   this.otherMsg=this.shareDataService.getMessageFromExampleService();
   this.lists=this.shareDataService.getNumber();
   
  }

  addnumber(val:any){
    this.shareDataService.addNumber(val);
  }





}
