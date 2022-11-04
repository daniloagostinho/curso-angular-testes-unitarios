import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  login(payload: any) {
    return this.http.post(`${this.url}/login`, payload)
  }

  getUsers() {
    return this.http.get(`${this.url}/users`)
  }

  getUsersWithPromise() {
    const promise =  new Promise((resolve, reject) => {
      this.http.get(`${this.url}/users`).subscribe(({
        next: (res: any) => {
          resolve(res);
        },
        error: (err: any) => {
          reject(err)
        },
        complete: () => {
          console.log('complete')
        }
      }))
    })
    return promise;
  }


  isAuthenticated() {
    return Promise.resolve(true);
  }

  postUser(user: any) {
    return this.http.post(`${this.url}/users`, user)
  }

  putUser(id: number, user: any) {
    return this.http.put(`${this.url}/users/${id}`, user)
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.url}/users/${id}`)
  }

  getUserWithHeaders() {
    const token = 'wa45a5a45a5a5a4a5a4a5a55a5a5a5a5a5a5a'
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.url}/users`, {headers})
  }

  getUsersById(id: number) {
    return this.http.get(`${this.url}/users/${id}`)
  }
}
