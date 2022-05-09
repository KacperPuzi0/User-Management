import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../users';

@Component({
  selector: 'app-logs-tab',
  templateUrl: './logs-tab.component.html',
  styleUrls: ['./logs-tab.component.css']
})
export class LogsTabComponent implements OnInit {
  user:User | undefined;
  constructor(private userService:UserService) {
    this.userService = userService;
   }

  ngOnInit(): void {
  }

}
