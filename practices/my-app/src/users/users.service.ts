import { Injectable } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Daniel', age: 20 },
    { id: 2, name: 'Daniel', age: 21 },
  ];
  getUsers() {
    console.log('la tenes adentro');

    return this.users;
  }

  createUsers(user: any) {
    this.users.push(user);
    return user;
  }
}
