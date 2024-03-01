import { Component } from '@angular/core';

const usersData = [
  {
    name: 'Alberto Rabascal',
    email: 'alberto@gmail.com',
    address: 'calle 1',
    uId: '099458735',
    vehiclePlate: 'GLS-0476',
    password: '12345',
    staff: false
  },
  {
    name: 'Juan Soledispa',
    email: 'juan@gmail.com',
    address: 'calle 2',
    uId: '09254678',
    vehiclePlate: 'GLS-8934',
    password: '12345',
    staff: false
  },
  {
    name: 'Marco Plaza',
    email: 'marco@gmail.com',
    address: 'calle 3',
    uId: '0994678235',
    vehiclePlate: 'GLS-4564',
    password: '12345',
    staff: false
  },
  {
    name: 'Alex',
    email: 'alex@gmail.com',
    uId: '09888888',
    password: '123456',
    staff: true
  },
];

const visitantesData = [
  {
    name: 'Andrea Jaramillo',
    email: 'andrea@gmail.com',
    uId: '099458735',
    phone: '1234556778',
    whereTo: 'calle 1',
  },
  {
    name: 'Mauricio Soliz',
    email: 'mauricio@gmail.com',
    uId: '09254678',

  },
  {
    name: 'Eduardo Mata',
    email: 'eduardo@gmail.com',
    uId: '0994678235',
    phone: '09364585',
    whereTo: 'calle 3',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sistemaDeControlDeAcceso';

  constructor() {
    localStorage.setItem('users', JSON.stringify(usersData));
    localStorage.setItem('visits', JSON.stringify(visitantesData));

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const visits = JSON.parse(localStorage.getItem('visits') || '[]');

  }
}
