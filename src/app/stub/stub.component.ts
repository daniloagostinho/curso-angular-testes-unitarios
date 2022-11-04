import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stub',
  templateUrl: './stub.component.html',
  styleUrls: ['./stub.component.scss']
})
export class StubComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo() {
    this.router.navigate(['/home'])
  }
}
