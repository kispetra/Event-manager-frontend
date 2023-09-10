import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { EventService } from '../service/event.service'; // Pretpostavljam da ćete koristiti EventService za slanje podataka na server
import { HttpErrorResponse } from '@angular/common/http';
import {  Router } from '@angular/router';
import { AxiosService } from '../service/axios.service';
import { Event } from '../interface/event';

@Component({
  selector: 'app-make-event',
  templateUrl: './make-event.component.html',
  styleUrls: ['./make-event.component.css']
})
export class MakeEventComponent implements OnInit {
  eventForm: FormGroup;
  currentUser: any;
  isLoggedIn = false;
  event: Event;

  constructor(private fb: FormBuilder, 
    private eventService: EventService,
     private router:Router,
     private axiosService: AxiosService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.axiosService.isLoggedIn();
  if (this.isLoggedIn) {
    this.currentUser = this.axiosService.getUser();
    if (this.currentUser) {
      // Sada možete pristupiti svojstvima currentUser, uključujući id
      const userId = this.currentUser.id; // Ovdje koristite this.currentUser.id
      this.initializeForm(userId);
    } else {
      // Ako korisnik nije dostupan, obradite tu situaciju kako želite
    }
  }
  }

  initializeForm(userId: number): void {
    this.isLoggedIn = this.axiosService.isLoggedIn();
    if (this.isLoggedIn) {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      description: '',
      maxParticipants: [0, Validators.min(1)],
      registrationsNotBefore: ['', Validators.required],
      registrationsNotAfter: ['', Validators.required],
      confirmationNotAfter: ['', Validators.required],
      startDate: ['', Validators.required],
      weeks: [0, Validators.min(1)],
      registrations: this.fb.array([]),
      userId: [userId] 
     });
     
    }
  }
  goBack(): void {
    this.router.navigate(['/events']); 
  }
  saveEvent(eventForm: FormGroup): void {
    if (eventForm.valid) {
      const event = eventForm.value as Event; // Pretvorite FormGroup u Event objekt
      const userId = this.currentUser.userid; // Pretpostavljam da želite koristiti trenutnog korisnika
  
      this.axiosService.saveEvent(event, userId).subscribe(
        (response: Event) => {
          console.log('Event created successfully:', response);
          this.router.navigate(['/profile']);
        },
        (error: HttpErrorResponse) => {
          console.error('Error creating event:', error);
          // Ovdje možete obraditi grešku ili prikazati poruku korisniku
        }
      );
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
