import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testing-route',
  templateUrl: './testing-route.component.html',
  styleUrls: ['./testing-route.component.scss']
})
export class TestingRouteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateUrl(url: string) {
    this.router.navigate([`/${url}`])
  }

}
