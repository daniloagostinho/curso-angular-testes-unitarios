import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-pipes-directive-route',
  templateUrl: './testing-pipes-directive-route.component.html',
  styleUrls: ['./testing-pipes-directive-route.component.scss']
})
export class TestingPipesDirectiveRouteComponent implements OnInit {
  url = 'http://google.com'
  constructor() { }

  ngOnInit(): void {
  }

}
