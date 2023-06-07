import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user/user.service';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import Swal from 'sweetalert2';
export function customEmailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const valid = emailPattern.test(control.value);
    return valid ? null : { invalidEmail: { message: 'Email không hợp lệ.' } };
  };
}
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent {
  submitted = false;
  user!: IUser;

  userForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email, customEmailValidator()]],
    address: ['', [Validators.required, Validators.minLength(6)]],
    role: [''],
    image: ['']
    // password: ['', [Validators.required, Validators.minLength(6)]]
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
          image: this.user.image
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
        image: this.userForm.value.image || "",

      }
      this.userService.updateUser(newCategory).subscribe(user => {

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Product has been added successfully!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/admin/user'])
      }, error => {
        console.log(error.message);


      })
    }

  }
}
