import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { AngularMaterialModule } from './angular-material.module';
import { PostsModule } from './posts/posts.module';
import { TableComponent } from './data-table-users/table-basic.component';
import { MatTableModule, MatIconModule, MatMenuModule, MatSidenavModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { UserComponent } from './tables/user-table/user-table.component';
import {MatListModule} from '@angular/material/list';
import { DashboardinternComponent } from './dashboardintern/dashboardintern.component';
import { AlertLogoutComponent } from './alert/alert-logout/alert-logout.component';
import { AlertSignupComponent } from './alert/alert-signup/alert-signup.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    TableComponent,
    PostListComponent,
    DashboardComponent,
    DashboardinternComponent,
    UserComponent,
    AlertLogoutComponent,
    AlertSignupComponent,
    AboutmeComponent,
    ContactComponent,
    ProjectsComponent,
    BlogComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    PostsModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
