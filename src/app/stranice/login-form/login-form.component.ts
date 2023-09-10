import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Output() onSubmitLoginEvent = new EventEmitter<{ login: string, password: string }>();
  @Output() onSubmitRegisterEvent = new EventEmitter<any>();

	active: string = "login";
  firstname: string = "";
  lastname: string = "";
  login: string = "";
  address: string = "";
  houseNumber: string = "";
  country: string = "";
  email: string = "";
  password: string = "";

	onLoginTab(): void {
		this.active = "login";
	}

	onRegisterTab(): void {
		this.active = "register";
	}

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({"login": this.login, "password": this.password});
  }

  onSubmitRegister(): void {
    this.onSubmitRegisterEvent.emit({"firstname": this.firstname, "lastname": this.lastname,
     "login": this.login, "address": this.address, "houseNumber": this.houseNumber,
     "country": this.country, "email": this.email, "password": this.password});
  }
}
