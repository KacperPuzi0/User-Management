import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { RolesAndPermissionsComponent } from './roles-and-permissions/roles-and-permissions.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MessagesComponent } from './messages/messages.component';
import { LeftTabComponent } from './left-tab/left-tab.component';
import { RightTabComponent } from './right-tab/right-tab.component';
import { LogsTabComponent } from './logs-tab/logs-tab.component';
import { PermissionsTabComponent } from './permissions-tab/permissions-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersEditComponent,
    RolesAndPermissionsComponent,
    SettingsComponent,
    UsersComponent,
    SideNavComponent,
    MessagesComponent,
    LeftTabComponent,
    RightTabComponent,
    LogsTabComponent,
    PermissionsTabComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
