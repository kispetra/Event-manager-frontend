import { Component, Output, EventEmitter } from '@angular/core';
import { AxiosService } from '../service/axios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
	@Output() loginEvent = new EventEmitter();
	@Output() logoutEvent = new EventEmitter();

  constructor(private axiosService: AxiosService, private router: Router) { }

  logout() {
    this.axiosService.signOut();
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
    window.location.reload();
  }
  
}
