import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersListComponent } from './users-list/users-list.component';
const routes: Routes = [
  {path:'', redirectTo:'/userslist', pathMatch:'full'},
  { path: 'userslist', component: UsersListComponent },
  { path: 'useredit/:id', component: UsersEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
