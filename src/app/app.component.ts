import { Component } from '@angular/core';
import { User } from './users';
import {USERS} from './mock-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'User-Management';
    status: boolean = false;
  clickEvent(){
      this.status = !this.status;
  }
  dateTime = Date.now();
}
