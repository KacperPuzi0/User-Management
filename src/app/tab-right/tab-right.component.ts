import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../users';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab-right',
  templateUrl: './tab-right.component.html',
  styleUrls: ['./tab-right.component.css']
})
export class TabRightComponent implements OnInit {

  user: User | undefined;
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

    users: User[] = [];


  constructor(private userService: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getUser();
  }

    getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe((user) => (this.user = user));
    }

}
