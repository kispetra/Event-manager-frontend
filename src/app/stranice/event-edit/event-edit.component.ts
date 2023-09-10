import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../service/event.service';
import { Event } from '../interface/event'; 
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  eventId: number;
  event: Event; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private datePipe: DatePipe
  ) { this.event = {} as Event; }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.eventId = +params['eventId'];
      this.loadEventDetails();
    });
  }
 
  loadEventDetails(): void {
    
    this.eventService.getEventByIdUser(this.eventId).subscribe(
      (response: Event) => {
        this.event = response;
        const formattedRegistrationsNotBefore = this.datePipe.transform(this.event.registrationsNotBefore, 'yyyy-MM-dd');
        const formattedRegistrationsNotAfter = this.datePipe.transform(this.event.registrationsNotAfter, 'yyyy-MM-dd');
        
      },
      (error) => {
        console.error('Greška pri dohvaćanju detalja događaja:', error);
      }
    );
  }

  onSubmit(): void {
    
      this.eventService.updateEvent(this.eventId, this.event).subscribe(
        () => {
          const formattedDate = this.datePipe.transform(this.event.registrationsNotBefore, 'yyyy-MM-dd');
          console.log('Događaj je uspješno ažuriran.');
          this.goBack();
        },
        (error) => {
          console.error('Greška pri ažuriranju događaja:', error);
        }
      );
  }
  
  
  
  goBack(): void {
    this.router.navigate(['/user-event/', this.eventId]);
  }
}
