import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../users';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-roles-and-permissions',
  templateUrl: './roles-and-permissions.component.html',
  styleUrls: ['./roles-and-permissions.component.css']
})
export class RolesAndPermissionsComponent implements OnInit {
  user: User | undefined;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
}
