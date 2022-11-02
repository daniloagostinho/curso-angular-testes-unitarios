import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  name!: string;
  email!: string;
  age!: string;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  getUsers() {
    this.http.getUsers().subscribe()
  }

  postUsers() {
    const user = {
      id: Math.random(),
      name: this.name,
      email: this.email,
      age: this.age
    }

    this.http.postUser(user).subscribe()
  }

  putUsers(id: any) {
    const user = {
      name: this.name,
      email: this.email,
      age: this.age
    }
    this.http.putUser(id, user).subscribe()
  }

  deleteUser(id: number) {
    return this.http.deleteUser(id).subscribe();
  }

  getUsersWithHeaders() {
    this.http.getUserWithHeaders().subscribe();
  }

  getUsersById(id: number) {
    this.http.getUsersById(id).subscribe();
  }
}
