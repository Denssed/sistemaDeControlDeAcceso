import { Injectable } from '@angular/core';
import { User } from '../types';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  addResident(newUser: User, role: string) {
    let users = []
    if (role === 'users') {
      users = JSON.parse(localStorage.getItem(role) || '[]');
    } else if (role === 'visits'){
      users = JSON.parse(localStorage.getItem(role) || '[]');
    }
    const newData = [...users, newUser]
    localStorage.setItem(role, JSON.stringify(newData))
    console.log(JSON.parse(localStorage.getItem(role) || '[]'))
  }

}
