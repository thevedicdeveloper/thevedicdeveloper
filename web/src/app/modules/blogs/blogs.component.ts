import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  public title: string;

  constructor(){
    this.title = "Introduction to Azure DevOps"
  }
}
