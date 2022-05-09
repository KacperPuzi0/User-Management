import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-left-tab',
  templateUrl: './left-tab.component.html',
  styleUrls: ['./left-tab.component.css'],
})
export class LeftTabComponent implements OnInit {
  user: User | undefined;
  users: User[] = [];
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe((user) => (this.user = user));
  }
  getUsers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  viewMode= 'tab1';
}
