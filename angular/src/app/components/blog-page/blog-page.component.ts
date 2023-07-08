import { Component } from '@angular/core';
import { IBlog } from 'src/app/interface/blog';
import { BlogService } from 'src/app/services/blog/blog.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  blogs: IBlog[] = [];

  constructor(private BlogService: BlogService) {
}
ngOnInit() {
  this.BlogService.getBlogs()
  .subscribe((data : any) => this.blogs = data)
}
}
