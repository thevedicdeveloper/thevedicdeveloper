import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { CardModule } from 'src/app/core/components/card/card.module';



@NgModule({
  declarations: [
    BlogsComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    BlogsComponent
  ]
})
export class BlogsModule { }
