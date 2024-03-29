import { NgModule } from '@angular/core';

import { PostCreateComponent } from './post-create/post-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ich habe die PostlistComponen herrausgenommen und sie ausschließlich im app-module gelassen um die somit im app.html darzustellen
@NgModule({
  declarations: [
    PostCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class PostsModule {}
