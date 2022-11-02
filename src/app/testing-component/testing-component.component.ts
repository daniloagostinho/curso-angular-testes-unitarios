import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-component',
  templateUrl: './testing-component.component.html',
  styleUrls: ['./testing-component.component.scss']
})
export class TestingComponentComponent implements OnInit {
  colorYes = 'green';
  colorNo = 'red'
  constructor() { }

  ngOnInit(): void {
  }

}
