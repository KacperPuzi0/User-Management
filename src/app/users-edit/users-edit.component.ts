import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import {Modal} from 'bootstrap';

import { User } from '../users';
import { UserService } from '../user.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css'],
})
export class UsersEditComponent implements OnInit {
  body:string = "Are you sure you want to block this user?";
  user: User | undefined;
  sModal : Modal | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe((user) => (this.user = user));
  }
  goBack(): void {
    this.location.back();
  }
  deleteUser() {
    this.userService.deleteUser(this.user!.id)
    this.router.navigate(['/userslist']);
  }
  open(){
        this.sModal = new bootstrap.Modal(document.getElementById('sModal') as HTMLElement,{
      keyboard: false,
  })
  this.sModal?.show();
 }
  blockUser(){
  this.sModal?.toggle();
 }
}
