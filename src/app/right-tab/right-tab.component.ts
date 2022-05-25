import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../users';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Modal } from 'bootstrap';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-right-tab',
  templateUrl: './right-tab.component.html',
  styleUrls: ['./right-tab.component.css'],
})
export class RightTabComponent implements OnInit {
  user: User | undefined;
  users: User[] = [];
  sModal: Modal | undefined;
  body: string = 'Are you sure you want to block this user?';

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
    role: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
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
  save(): void {
    if (this.user) {
      this.userService.updateUser(this.user).subscribe(() => this.goBack());
    }
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
}
