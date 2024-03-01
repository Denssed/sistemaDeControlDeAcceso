import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrl: './visit.component.css'
})
export class VisitComponent {

  visitForm: FormGroup

  constructor(private formBuilder: FormBuilder, private register: RegisterService) {
    this.visitForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      uId: ['', Validators.required],
      phone: ['', Validators.required],
      whereTo: ['', Validators.required],
    })
  }

  submitForm() {
    if (this.visitForm.valid) {
      const visit = this.visitForm.value
      this.register.addResident(visit, 'visits')
    } else {
      alert("Datos incorrectos")
    }
  }
}
