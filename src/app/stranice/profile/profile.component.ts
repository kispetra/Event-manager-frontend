import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AxiosService } from '../service/axios.service';
import { Event } from '../interface/event';
import { Router } from '@angular/router';
import { Registration } from '../interface/registration';
import { RegistrationService } from '../service/registration.service';
import { Personal } from '../interface/personal';
import { Name } from '../interface/name';
import { Education } from '../interface/education';
import { Experience } from '../interface/experience';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  userEvents: Event[]= [];
  isLoggedIn = false;
  login?: string;
  email?: string;
  address?: string;
  firstname?: string;
  lastname?:string;
  houseNumber?:string;
  country?: string;
  userid?: number;
  


  constructor(private token: AxiosService, private cdRef: ChangeDetectorRef,
     private router: Router, private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.token.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.login = user.login;
      this.email = user.email;
      this.firstname=user.firstname;
      this.lastname=user.lastname;
      this.address=user.address;
      this.houseNumber=user.houseNumber;
      this.country=user.country;
      this.userid=user.userid;

      if (this.userid) {
        this.token.getCurrentUserEvents(this.userid).subscribe(
          (eventResponse:  any) => {
            this.userEvents = eventResponse;
            this.cdRef.detectChanges(); 
          },
          (error) => {
            console.error('Greška pri dohvaćanju događaja:', error);
          }
        );
      }
      
    }
  }
  navigateToCreateEvent(): void {
    this.router.navigate(['/create-event']);
  }
  


}