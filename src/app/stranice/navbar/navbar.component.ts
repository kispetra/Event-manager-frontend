import { Component } from '@angular/core';
import { AxiosService } from '../service/axios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private axiosService: AxiosService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.axiosService.getToken();

    if (this.isLoggedIn) {
      const user = this.axiosService.getUser();
      this.username = user.username;
    }else {
      this.router.navigate(['/login']); // Usmjeri na početnu stranicu ako korisnik nije prijavljen.
    }
  }

  logout(): void {
    this.axiosService.signOut();
    window.location.reload();
  }
}