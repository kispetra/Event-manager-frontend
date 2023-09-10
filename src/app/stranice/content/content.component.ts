import { Component, EventEmitter, Output } from '@angular/core';
import { AxiosService } from '../service/axios.service';
import { LoginFormComponent } from '../login-form/login-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
	componentToShow: string = "/login";
	loginForm: LoginFormComponent;
	@Output() registerEvent = new EventEmitter();

	constructor(private axiosService: AxiosService, private router: Router  ) { }

	showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  	}

  	logout(): void {
		this.axiosService.signOut();
		localStorage.removeItem('authToken');
		this.componentToShow = "/login";
    	this.router.navigate(['/login']);
		window.location.reload();
  	}

	onLogin(input: any): void {
		this.axiosService.request(
		    "POST",
		    "/login",
		    {
		        login: input.login,
		        password: input.password
		    }).then(
		    response => {
		        this.axiosService.setAuthToken(response.data.token);
		        this.componentToShow = "profile";
				const userId = response.data.userid;
				localStorage.setItem('userId', userId);
				this.registerEvent.emit();
				
				this.axiosService.getCurrentUser().then(user => {
					localStorage.setItem('auth-user', JSON.stringify(user));
					
				this.router.navigate(['/profile'])
				this.axiosService.saveUser(response.data);
				});
		    }).catch(
		    error => {
		        this.axiosService.setAuthToken(null);
		        this.componentToShow = "events";
		    }
		);

	}

	onRegister(input: any): void {
		this.axiosService.request(
		    "POST",
		    "/register",
		    {
		        firstname: input.firstname,
		        lastname: input.lastname,
		        login: input.login,
				address: input.address,
				houseNumber: input.houseNumber,
				country: input.country,
				email: input.email,
		        password: input.password
		    }).then(
		    response => {
		        this.axiosService.setAuthToken(response.data.token);
				const userId = response.data.userid;
            	localStorage.setItem('userId', userId);
				this.onLogin({ login: input.login, password: input.password });
				this.axiosService.saveUser(response.data);
		        this.componentToShow = "events";
		    }).catch(
		    error => {
		        this.axiosService.setAuthToken(null);
		        this.componentToShow = "";
		    }
		);
	}

}