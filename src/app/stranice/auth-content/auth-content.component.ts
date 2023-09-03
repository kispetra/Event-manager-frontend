import { Component } from '@angular/core';
import { AxiosService } from '../service/axios.service';

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.css']
})
export class AuthContentComponent {

  data: string[]; //backend response
  constructor(private axiosService: AxiosService){}

  ngOnInit(): void{
    this.axiosService.request(
      "GET",
      "/event/all",
      {}).then(
        (response) => {
            this.data = response.data;
        }).catch(
        (error) => {
            if (error.response.status === 401) {
                this.axiosService.setAuthToken(null);
            } else {
                this.data = error.response.code;
            }

        }
    );
  }
}
