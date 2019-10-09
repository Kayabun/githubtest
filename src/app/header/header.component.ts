import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  refresh(): void {
    window.location.reload();
  }

  constructor(private authService: AuthService, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
