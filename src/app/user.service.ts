import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  register(login, password, birthYear) {
    const body = {login, password, birthYear};
    return this.http.post('http://ponyracer.ninja-squad.com/api/users', body).map(res => res.json());
  }
}
