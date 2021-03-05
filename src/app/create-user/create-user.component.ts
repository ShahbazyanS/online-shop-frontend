import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  saveUser() {
    this.userService.createUser(this.user).subscribe(data =>{
      console.log(data);
    },
      error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }

}
