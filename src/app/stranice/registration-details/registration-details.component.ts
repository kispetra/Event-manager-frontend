import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';
import {  Registration } from '../interface/registration';
import { Comment } from '../interface/comment';

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.css']
})
export class RegistrationDetailsComponent implements OnInit {
  registration: Registration;
  eventId: number;
  registrationId:number;
  scoreValue: number; 
  commentValue: string;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private registrationService: RegistrationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const eventId = +params['eventId'];
      const registrationId = +params['registrationId'];
      this.loadRegistrationDetails(eventId, registrationId);
    });
  }

  loadRegistrationDetails(eventId: number, registrationId: number): void {
    this.eventId = eventId; 
    this.registrationId = registrationId;
    this.registrationService.getRegistrationById(eventId, registrationId).subscribe(
      (response: Registration) => {
        this.registration = response;
      },
      (error) => {
        console.error('Greška pri dohvaćanju detalja registracije:', error);
      }
    );
  }
  deleteRegistration(): void {
      this.registrationService.deleteRegistration(this.eventId, this.registrationId).subscribe(
        () => {
          console.log('Registracija uspješno obrisana.');
      console.log('eventId:', this.eventId);
          this.router.navigate(['/user-event',  this.eventId]);
        },
        (error) => {
          console.error('Greška pri brisanju registracije:', error);
        }
      );
    
  }

  scoreRegistration(): void {
    // Provjerite jesu li scoreValue i commentValue definirani prije slanja na server
    if (typeof this.scoreValue === 'string' && this.commentValue) {
      const scoreRequestDto = {
        score: this.scoreValue,
        comment: this.commentValue
      };

      this.registrationService.score(this.eventId, this.registrationId, scoreRequestDto).subscribe(
        (response) => {
          console.log('Ocjenjivanje uspješno:', response);
        },
        (error) => {
          console.error('Greška pri ocjenjivanju registracije:', error);
        }
      );
    } else {
      console.error('Unesite ispravnu ocjenu i komentar');
    }
  }

}
