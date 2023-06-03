import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IBlog } from 'src/app/interface/blog';
import { BlogService } from 'src/app/services/blog/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss']
})
export class BlogAddComponent {
  submitted = false;
  blogForm = this.formBuilder.group({
    author: ['', [Validators.required, Validators.minLength(4),Validators.pattern('^[^0-9]+$')]],
    description: ['', [Validators.required, Validators.minLength(4)]],
    image:['',[Validators.required]]
  })
  constructor(private BlogService: BlogService,
    private formBuilder: FormBuilder,
    private router: Router) { }
  onHandleAdd() {

    
    
    if (this.blogForm.valid) {
      const blog: IBlog = { 
        author: this.blogForm.value.author || "",
        image: this.blogForm.value.image||"",
        description: this.blogForm.value.description || "",
  
      }
      this.BlogService.addBlog(blog).subscribe(blog => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Blog has been added successfully!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/admin/blogs'])
      }, error => {
        console.log(error.message);
    
      })
    }
  }
}
