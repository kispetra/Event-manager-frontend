import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService} from '../service/event.service';
import { Participant } from '../interface/participant';

@Component({
  selector: 'app-participation-details',
  templateUrl: './participation-details.component.html',
  styleUrls: ['./participation-details.component.css'],
})
export class ParticipationDetailsComponent implements OnInit {
  participant: Participant; 

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService 
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const eventId = +params['eventId'];
      const participantId = +params['participantId'];
      this.loadParticipantDetails(eventId, participantId);
    });
  }

  loadParticipantDetails(eventId: number, participantId: number): void {
    this.eventService.getParticipantDetails(eventId, participantId).subscribe(
      (participantData: Participant) => {
        this.participant = participantData;
      },
      (error) => {
        console.error('Greška pri dohvaćanju detalja sudionika:', error);
      }
    );
  }
}
