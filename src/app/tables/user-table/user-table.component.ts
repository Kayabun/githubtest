import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '../user.model';
import { UserService } from '../user.service';
import { PageEvent } from '@angular/material';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'Fist Post', content: 'This is the first post\'s content'},
  //   {title: 'Second Post', content: 'This is the second post\'s content'},
  //   {title: 'Third Post', content: 'This is the third post\'s content'},
  // ];
  users: User[] = [];
  isLoading = false;
  totalUsers = 0;
  userPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
  userId: string;
  private userSub: Subscription;
  private authStatusSub: Subscription;

  constructor(public usersService: UserService, private authService: AuthService) {}

  ngOnInit() {
    this.isLoading = true;
    this.usersService.getUsers(this.userPerPage, this.currentPage);
    this.userId = this.authService.getUserId();
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.authStatusSub = this.authService
        .getAuthStatusListener()
        .subscribe();
  }

  onChangedPage(userData: PageEvent) {
    this.isLoading = true;
    this.currentPage = userData.pageIndex + 1;
    this.userPerPage = userData.pageSize;
    this.usersService.getUsers(this.userPerPage, this.currentPage);
  }


  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}
