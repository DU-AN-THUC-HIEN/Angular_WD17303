import { Component } from '@angular/core';
import { error } from 'jquery';
import { IUser } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: IUser[] = [];
    constructor(private UserService: UserService){
      this.UserService.getUser().subscribe((data) =>{
        this.users = data
      }, error =>{
        console.log(error.message);
        
      })
    }
    removeItem(id: any){
      this.UserService.removeUser(id).subscribe(user =>{
        const newUser = this.users.filter((user) =>user._id !=id);
        this.users = newUser
        console.log('Xóa thành công', user);
        
      })
    }
}
