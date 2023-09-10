import { ChangeDetectorRef, Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../service/event.service';
import { Event } from '../interface/event'; 
import { Registration } from '../interface/registration';
import { Personal } from '../interface/personal';
import { Name } from '../interface/name';
import { Education } from '../interface/education';
import { Experience } from '../interface/experience';
import { RegistrationService } from '../service/registration.service';
import { HttpClient } from '@angular/common/http';
import { Participant } from '../interface/participant';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  eventId: number;
  event: Event; 
  userId: number;
  registrationId: number;
  registrations: Registration[]
  personal: Personal;
  name: Name;
  education: Education;
  experience: Experience;
  registration: Registration;
  participants: Participant[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private registrationService: RegistrationService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.eventId = +params['eventId'];
      this.loadEventDetails();
      this.getAllRegistrations();
      this.getInvitedParticipants();
    });
  }
  viewRegistrationDetails(registrationId: number): void {
    if (this.eventId !== undefined && registrationId !== undefined) {
      this.router.navigate(['/user-event', this.eventId, 'registration', registrationId]);
    } else {
      console.error('eventId or registrationId is undefined');
    }
  }
  viewParticipationDetails(participantId: number): void {
    if (this.eventId !== undefined && participantId !== undefined) {
      this.router.navigate(['participation-details',  participantId]);
    } else {
      console.error('eventId or registrationId is undefined');
    }
  }
  sortRegistrationsByScore(): void {
    if (this.registrations) {
      this.registrations.sort((a, b) => b.score - a.score);
    }
  }
  getAllRegistrations(): void {
    this.registrationService.getAllUserRegistrations(this.eventId).subscribe(
      (registrations: Registration[]) => {
        this.registrations = registrations;
        this.sortRegistrationsByScore(); 
      },
      (error) => {
        console.error('Greška pri dohvaćanju registracija:', error);
      }
    );
  }
  loadEventDetails(): void {
    this.eventService.getEventByIdUser(this.eventId).subscribe(
      (response: Event) => {
        this.event = response;
      },
      (error) => {
        console.error('Greška pri dohvaćanju detalja događaja:', error);
      }
    );
  }
  
  deleteEvent(): void {
    const eventId = this.event.eventId; 
    if (eventId) {
      this.eventService.deleteEvent(eventId).subscribe(
        () => {
          this.router.navigateByUrl("/profile");
        },
        (error) => {
          console.error('Greška pri brisanju događaja:', error);
        }
      );
    }
  }
  inviteParticipants(): void {
    if (this.event && this.participants) {
      this.eventService.inviteParticipants(this.eventId).subscribe(
        response => {
          console.log('Poziv sudionicima uspješno poslan:', response);
          this.getInvitedParticipants();
        },
        error => {
          console.error('Greška pri slanju poziva sudionicima:', error);
        }
      );
    } else {
      console.error('Događaj nije učitan ili nisu uneseni podaci sudionika. Molimo provjerite unose.');
    }
  }
  getInvitedParticipants(): void {
    this.eventService.getInvitedParticipants(this.eventId).subscribe(
      (participants: Participant[]) => {
        this.participants = participants;
      },
      (error) => {
        console.error('Greška pri dohvaćanju pozvanih sudionika:', error);
      }
    );
  }

  goBack(): void {
     this.router.navigate(['/profile']);
  }
  editEvent(): void {
    this.router.navigate(['/event-edit', this.eventId]);
  }
}
