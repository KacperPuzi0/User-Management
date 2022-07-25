import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../users';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, SelectControlValueAccessor } from '@angular/forms';
import { Role } from '../roles';
import { ROLES } from '../mock-roles';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-permissions-tab',
  templateUrl: './permissions-tab.component.html',
  styleUrls: ['./permissions-tab.component.css'],
})
export class PermissionsTabComponent implements OnInit {
  user: User | undefined;
  public roles: Role[] = ROLES;
  formArray!: FormGroup;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.userService = userService;
    this.roles = ROLES;
  }
  get objects(): FormArray {
    return this.formArray.get('objects') as FormArray;
  }

  ngOnInit(): void {
    this.getUser();

    this.formArray = this.fb.group({
      objects: this.fb.array([
        this.fb.control({active:false, name: 'Script' }),
        this.fb.control({active:false, name: 'Props' }),
        this.fb.control({active:false, name: 'Scenes' }),
        this.fb.control({active:false, name: 'Money' }),
        this.fb.control({active:false, name: 'Stunt' }),
      ]),
    });

  }
  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe((user) => (this.user = user));
  }
  form = new FormGroup({
    role: new FormControl(''),
  });

  buttons = new FormGroup({
    add: new FormControl('active:false'),
    remove: new FormControl('active:false'),
    update: new FormControl('active:false'),
    set: new FormControl('acxive:false'),
  });
  click= [false,false,false,false,false];
}
