import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './users';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    const users = [
      {
        id: 1,
        name: 'Leanne Graham',
        surname: 'Bret',
        birthDate: new Date(1992, 3, 15),
        citizenship: 'USA',
        photo: 'assets/images/users/1.jpg',
        email: 'bret@gmail.com',
        facebook: '@LeaneGraham',
        twitter: '@LeaneGraham',
        instagram: '@LeaneGraham',
        role: 'Performer',
      },
      {
        id: 2,
        name: 'Hugh',
        surname: 'Jackman',
        birthDate: new Date(1967, 3, 12),
        citizenship: 'USA',
        photo: 'assets/images/users/1.jpg',
        email: 'hugh@jackman.xman',
        facebook: '@HughJackman',
        twitter: '@HughJackman',
        instagram: '@HughJackman',
        role: 'Performer',
      },
      {
        id: 3,
        name: 'Johny',
        surname: 'Deep',
        birthDate: new Date(1968, 3, 12),
        citizenship: 'USA',
        photo: 'assets/images/users/1.jpg',
        email: 'johny@deep.',
        facebook: '@JohnyDeep',
        twitter: '@JohnyDeep',
        instagram: '@JohnyDeep',
        role: 'Performer',
      },
    ];
    return { users };
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;
  }

  constructor() {}
}
