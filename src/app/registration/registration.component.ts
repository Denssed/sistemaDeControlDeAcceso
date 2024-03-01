import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  registerForm: FormGroup

  constructor(private formBuilder: FormBuilder, private register: RegisterService) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      uId: ['', Validators.required],
      vehiclePlate: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  submitForm() {
    if (this.registerForm.valid) {
      const resident = this.registerForm.value
      this.register.addResident(resident, 'users')
    } else {
      alert("Datos incorrectos")
    }
  }
}
