import { Component } from '@angular/core';
import { AxiosService } from '../service/axios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor( private axiosService: AxiosService) { }

  ngOnInit(): void {
    
  }

}