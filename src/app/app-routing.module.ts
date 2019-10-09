import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { AuthGuard } from './auth/auth.guard';
import { TableComponent } from './data-table-users/table-basic.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserTableComponent } from './user-table/user-table.component';
import { DashboardinternComponent } from './dashboardintern/dashboardintern.component';
import { AlertLogoutComponent } from './alert/alert-logout/alert-logout.component';
import { AlertSignupComponent } from './alert/alert-signup/alert-signup.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'dashboardintern', component: DashboardinternComponent },
  { path: 'alert-logout', component: AlertLogoutComponent },
  { path: 'alert-signup', component: AlertSignupComponent },
  { path: 'post-list', component: PostListComponent },
  { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard]  },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'data-table-users', component: TableComponent, canActivate: [AuthGuard] },
  { path: 'user-table', component: UserTableComponent, canActivate: [AuthGuard] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule {}
