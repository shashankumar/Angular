import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-demo',
  templateUrl: './test-demo.component.html',
  styleUrls: ['./test-demo.component.css']
})
export class TestDemoComponent implements OnInit {
public name ="shashank2";
public url =window.location.href;
public boolValue =true;
public variable = "newcolor";
public hasError = true;
  constructor() { };

  ngOnInit(): void {
  }

  getName(){
    return "Hello "+this.name;
  }
  public colorObj ={
    red :false,
    v :true
  }

}
