import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersEditComponent } from './users-edit/users-edit.component';
import {UsersListComponent} from './users-list/users-list.component';
import { RolesAndPermissionsComponent } from './roles-and-permissions/roles-and-permissions.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { MessagesComponent } from './messages/messages.component';
const routes: Routes = [
  {path:'', redirectTo:'/users', pathMatch:'full'},
  {path:'userslist', component:UsersListComponent},
  {path:'useredit/:id', component:UsersEditComponent,
  children:[
    {path:'messages', component:MessagesComponent},
    {path:'rolesandpermissions', component:RolesAndPermissionsComponent},
  ]},
  {path:'settings', component:SettingsComponent},
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
