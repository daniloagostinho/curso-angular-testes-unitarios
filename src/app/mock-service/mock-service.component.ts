import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-mock-service',
  templateUrl: './mock-service.component.html',
  styleUrls: ['./mock-service.component.scss']
})
export class MockServiceComponent implements OnInit {

  constructor(private myService: MyServiceService) { }

  ngOnInit(): void {
  }

  getUsers() {
    this.myService.getUsers().subscribe();
  }
}
