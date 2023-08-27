import { Component, OnInit } from '@angular/core';
import {  EventService } from '../service/event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Event }from '../interface/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{

  public events: Event[]=[];

  constructor(private eventService: EventService, private datePipe: DatePipe){}

  ngOnInit(): void {
    this.getEvents();
  }

  public getEvents():void{
    this.eventService.getEvents().subscribe(
      (response: Event[])=>{
        this.events = response;
        this.events.forEach(event => {
          event.showDetails = false; // Inicijalno postavljamo na false
        });
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
}
