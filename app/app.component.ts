import { Component, OnInit } from '@angular/core';
import { MqmService } from './mqm.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
//  public users:any;
public users = [];
 public details :object = [];
  constructor(private mqmservice: MqmService) {}  
  
  ngOnInit()
  {
    // return this.mqmservice.getdata()
    // .subscribe(data => this.users = data)
     this.mqmservice.getdata().subscribe((data) =>
  {
this.users = Array.from(Object.keys(data), k => data[k]);
console.log(this.users);
  });  
  }
  
  search(name: string) {
   let obj = this.users.filter (m => m.name == name);
    this.details = obj;
    // console.log(this.details);
  }
 
}
