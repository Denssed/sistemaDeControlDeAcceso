import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutentificationService {

  constructor() { }

  login(email: string, password: string ) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const existUser = users.some( (user: {email: string, password: string}) => user?.email === email && user?.password === password);
    return existUser
  }

}
