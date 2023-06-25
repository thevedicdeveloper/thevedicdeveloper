import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { BlogComponent } from './blog.component';



@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class BlogModule { }
