import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from './user.model';

const BACKEND_URL = environment.apiUrl + '/tables/';


@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = [];

  constructor(private http: HttpClient) {}

  getUsers(usersPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${usersPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; users: any, maxUsers: number }>(
        BACKEND_URL + queryParams
        )
      .pipe(
        map(userData => {
          return { users: userData.users.map(user => {
            return {
              email: user.email,
              password: user.password,
              id: user._id
            };
          }), maxUsers: userData.maxUsers};
        })
      )
      .subscribe(transformedUserData => {
        this.users = transformedUserData.users;
      });
  }

  getUser(id: string) {
    return this.http.get<{
      _id: string,
      email: string,
      password: string
    }>(BACKEND_URL + id);
  }

}
