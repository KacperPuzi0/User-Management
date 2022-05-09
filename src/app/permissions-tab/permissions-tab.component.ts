import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../users';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-permissions-tab',
  templateUrl: './permissions-tab.component.html',
  styleUrls: ['./permissions-tab.component.css']
})
export class PermissionsTabComponent implements OnInit {
  user : User | undefined;
  constructor(private userService:UserService,
    private route: ActivatedRoute,) {
    this.userService = userService;
   }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe((user) => (this.user = user));
}}
