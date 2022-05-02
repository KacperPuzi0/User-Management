import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersEditComponent } from './users-edit/users-edit.component';
import {UsersListComponent} from './users-list/users-list.component';
import { RolesAndPermissionsComponent } from './roles-and-permissions/roles-and-permissions.component';
import { SettingsComponent } from './settings/settings.component';
const routes: Routes = [
  {path:'', redirectTo:'/', pathMatch:'full'},
  {path:'userslist', component:UsersListComponent},
  {path:'useredit', component:UsersEditComponent},
  {path:'rolesandpermissions', component:RolesAndPermissionsComponent},
  {path:'settings', component:SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
