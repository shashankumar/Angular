import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name ="shashank";
  public address ="h.n.4/252,<br>East of junior high school\nNath Nagar,\nDeoria,\nU.P.";

  constructor() { }

  ngOnInit(): void {
  }

}
