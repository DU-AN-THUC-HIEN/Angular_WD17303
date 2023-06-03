import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlog } from 'src/app/interface/blog';
import { BlogService } from 'src/app/services/blog/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent {
  blog!: IBlog;
  submitted = false;
  blogForm = this.formBuilder.group({
    author: ['', [Validators.required, Validators.minLength(4),Validators.pattern('^[^0-9]+$')]],
    description: ['', [Validators.required, Validators.minLength(4)]],
    image:['',[Validators.required]]
  })

  constructor(private blogService: BlogService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.paramMap.subscribe(params => {
      const id = String(params.get('id'));
      this.blogService.getBlogId(id).subscribe(blog => {
        this.blog = blog;        
        this.blogForm.patchValue({
          author: this.blog.author,
          description: this.blog.description,
          image: this.blog.image
        })
      }, error => console.log(error.message)
      )
    })
  }
  onHandleUpdate() {
    if (this.blogForm.valid) {
      const newBlog: IBlog = {
        _id: this.blog._id,
        author: this.blogForm.value.author || "",
        image: this.blogForm.value.image||"",
        description: this.blogForm.value.description || "",
      }      
    
      
      this.blogService.updateBlog(newBlog).subscribe(blog=>{
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'blog has been added successfully!',
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
