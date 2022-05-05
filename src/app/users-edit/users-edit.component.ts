import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Modal } from 'bootstrap';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

import { User } from '../users';
import { UserService } from '../user.service';
import * as bootstrap from 'bootstrap';
import { TabRightComponent } from '../tab-right/tab-right.component';
@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css'],
})
export class UsersEditComponent implements OnInit {
  body: string = 'Are you sure you want to block this user?';
  user: User | undefined;
  sModal: Modal | undefined;
  userForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    birthDate: new FormControl(''),
    citizenship: new FormControl(''),
    photo: new FormControl(''),
    instagram: new FormControl(''),
    facebook: new FormControl(''),
    twitter: new FormControl(''),
    email: new FormControl(''),
  });

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

  open() {
    this.sModal = new bootstrap.Modal(
      document.getElementById('sModal') as HTMLElement,
      {
        keyboard: false,
      }
    );
    this.sModal?.show();
  }
  blockUser() {
    this.sModal?.toggle();
  }

  deleteUsers(): void {
    if (this.user) {
      this.userService.deleteUser(this.user.id).subscribe(() => this.goBack());
    }
  }

  save(): void {
    if (this.user) {
      this.userService
        .updateUser(this.user)
        .subscribe(() => this.goBack());
    }
  }
}
