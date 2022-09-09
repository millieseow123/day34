import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Register } from '../models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Output()
  onNewRegistration = new Subject<Register>()

  form!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  registerForm() {
    const register: Register = this.form.value as Register
      console.log("register", register)
      this.onNewRegistration.next(register)
    
  }

  private createForm() {
    return this.fb.group({
      name: this.fb.control<string>('', [Validators.required]),
      email: this.fb.control<string>('', [Validators.required, Validators.email])
    })
  }
}
