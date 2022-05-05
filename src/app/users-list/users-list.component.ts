import { Component, OnInit } from '@angular/core';
import {USERS} from '../mock-users';
import { User } from '../users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  selectedUser?: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }


}
