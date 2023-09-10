import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../service/event.service';
import { Event } from '../interface/event';
import { RegistrationService } from '../service/registration.service';
import { Registration } from '../interface/registration';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EventService,
    private regService: RegistrationService,
    private snackBar: MatSnackBar
  ) {}

  event: Event;
  isRegistrationDisabled: boolean = false;

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      const eventId = +params.get('eventId');
      this.service.getById(eventId).subscribe(
        event => {
          this.event = event;
          this.checkRegistrationStatus();
        },
        error => {
          console.error('Error fetching event:', error);
        }
      );
    });
  }
  
  goBack(): void {
    this.router.navigate(['/events']); 
  }
  goForward(eventId: number): void {
    this.router.navigate(['events', eventId, 'registrations']);
  }  
  
  checkRegistrationStatus(): void {
    const currentDate = new Date();
    if (
      this.event &&
      (currentDate < this.event.registrationsNotBefore ||
        currentDate > this.event.registrationsNotAfter)
    ) {
      // Datum prijave je istekao, prikaži obavijest
      this.showRegistrationExpiredMessage();
      this.isRegistrationDisabled = true;
    }
  }
  showRegistrationExpiredMessage(): void {
    this.snackBar.open('Datum prijave je istekao. Prijave su onemogućene.', 'Zatvori', {
      duration: 5000, // Trajanje obavijesti u milisekundama
      verticalPosition: 'top'
    });
  }
}
