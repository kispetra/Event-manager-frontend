import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  @Output() onSubmitRegisterEvent = new EventEmitter();
  active: string = "login";
  firstname: string = "";
  lastname: string = "";
  username: string = "";
  password: string = "";

  constructor(private router: Router) {}

  onRegisterTab(): void {
    console.log('bla');
		this.active = "register";
    this.router.navigateByUrl('/register');
	}

  onSubmitRegister(): void {
    console.log('Submit Register button clicked');
    console.log('Username:', this.username);
    console.log('Firstname:', this.firstname);
    console.log('Lastname:', this.lastname);
    this.onSubmitRegisterEvent.emit({"firstname": this.firstname, "lastname": this.lastname, "username": this.username, "password": this.password});
  }
}
