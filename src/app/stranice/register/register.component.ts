/*import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service'; // Trebate implementirati AuthService za registraciju
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit{
  form: any = {
  username: null,
  firstName: null,
  lastName: null,
  address: null,
  houseNumber: null,
  country: null,
  email: null,
  password: null,
  error: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, firstName, lastName, address, houseNumber, country, email, password } = this.form;

    this.authService.register(username, firstName, lastName, address, houseNumber, country, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
*/