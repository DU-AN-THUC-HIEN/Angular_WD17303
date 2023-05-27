import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interface/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  isSubmitted = false;
  errorMessage = '';
  userForm = this.FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })
  constructor(
    private UserService: UserService,
    private FormBuilder: FormBuilder,
    private Router: Router
  ) { }
  onHandleSignin() {
    if (this.userForm.valid) {
      const user: IUser = {
        email: this.userForm.value.email || "",
        password: this.userForm.value.password || "",
      }
      this.UserService.signIn(user).subscribe(response => {
        localStorage.setItem("user", JSON.stringify(response.user));
        this.Router.navigate(['/admin']);
      })
    }
  }
}
