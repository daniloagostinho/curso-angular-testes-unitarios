import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-asynchronous-component',
  templateUrl: './asynchronous-component.component.html',
  styleUrls: ['./asynchronous-component.component.scss']
})
export class AsynchronousComponentComponent implements OnInit {
  data: any;
  dataPromise: any;
  isLogged: any;
  name!: string;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  getUsers() {
    this.http.getUsers().subscribe(res => {
      this.data = res;
    })
  }

  getUsersWithPromise() {
    this.http.getUsersWithPromise().then(res => {
      console.log('res then -->>', res)
      this.dataPromise = res;
    })
  }

  isAuthenticaded() {
    this.http.isAuthenticated().then(res => {
      this.isLogged = res;
    })
  }

  defineValue() {
    this.name = 'Danilo';
    setTimeout(() => {
      this.name = 'Jessica'
    }, 100)
  }
}
