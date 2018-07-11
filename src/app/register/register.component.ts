import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

    registerData = {};

    constructor( private authServices: AuthService) {}

    post() {
        this.authServices.registerUser(this.registerData);
    }
}
