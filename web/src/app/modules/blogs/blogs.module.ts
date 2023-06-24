import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';



@NgModule({
  declarations: [
    BlogsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlogsComponent
  ]
})
export class BlogsModule { }
