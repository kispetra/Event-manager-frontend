import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../service/event.service';
import { Event } from '../interface/event';
import { RegistrationService } from '../service/registration.service';
import { Registration } from '../interface/registration';

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
    private regService: RegistrationService
  ) {}

  event: Event;
 
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const eventId = +params.get('eventId');
      this.service.getById(eventId).subscribe(
        event => {
          this.event = event;
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
  
}
