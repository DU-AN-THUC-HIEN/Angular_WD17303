import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent {
  user!: IUser;
  userForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required]],
    role: [''],
    password: ['', [Validators.required]]
  })

  constructor(private userService: UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.paramMap.subscribe(params => {
      const id = String(params.get('id'));
      this.userService.getUserById(id).subscribe(user => {
        this.user = user;        
        this.userForm.patchValue({
          name: this.user.name,
          email: this.user.email,
          address: this.user.address,
          role: this.user.role,
          password: this.user.password,
        })
      }, error => console.log(error.message)
      )
    })
  }
  onHandleUpdate() {
    if (this.userForm.valid) {
      const newCategory: IUser = {
        _id: this.user._id,
        name: this.userForm.value.name || "",
        email: this.userForm.value.email || "",
        address: this.userForm.value.address || "",
        role: this.userForm.value.role || "",
        password: this.userForm.value.password || ""
      }      
      console.log(newCategory);
      
      this.userService.updateUser(newCategory).subscribe(user=>{
        this.router.navigate(['/admin/user'])
      })
    }
  }
}
