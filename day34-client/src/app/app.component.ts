import { Component } from '@angular/core';
import { Register } from './models';
import { v4 } from 'uuid';
import { RegistrationService } from './services/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private registrationSvc: RegistrationService) {}

processNewRegistration(register: Register) {
  register.registrationId = v4().substring(0, 8)
  console.log("register", register)

  this.registrationSvc.newRegistration(register)
    .then(result => {
      console.log(">>>> result: ", result)
    })
    .catch(error => {
      console.log(">>>> error: ", error)
    })
}
}
