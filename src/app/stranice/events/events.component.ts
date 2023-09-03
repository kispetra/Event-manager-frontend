import { Component, OnInit } from '@angular/core';
import {  EventService } from '../service/event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Event }from '../interface/event';

import { BehaviorSubject, Observable, catchError, map, of, startWith } from 'rxjs';
import { apiResponse } from '../interface/ApiResponse';
import { Page } from '../interface/Page';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  
  eventState$: Observable<{appState: string, appData?: apiResponse<Page>, error?: HttpErrorResponse}>;
  responseSubject= new BehaviorSubject<apiResponse<Page>>(null);
  private currentPageSubject = new BehaviorSubject<number>(0);
  currentPage$ = this.currentPageSubject.asObservable()

  
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventState$ = this.eventService.events$().pipe(
      map((response: apiResponse<Page>) => {

        this.responseSubject.next(response);
        this.currentPageSubject.next(response.data.page.number);
        console.log(response);
        return ({ appState: 'APP_LOADED', appData: response });
      }),
      startWith({ appState: 'APP_LOADING' }),
      catchError((error: HttpErrorResponse) =>{ 
        return of({ appState: 'APP_ERROR', error })}
        )
    )
  }

  goToPage(name?: string, pageNumber: number = 0): void {
    this.eventState$ = this.eventService.events$(name, pageNumber).pipe(
      map((response: apiResponse<Page>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(pageNumber);
        console.log(response);
        return ({ appState: 'APP_LOADED', appData: response });
      }),
      startWith({ appState: 'APP_LOADED', appData: this.responseSubject.value }),
      catchError((error: HttpErrorResponse) =>{ 
        return of({ appState: 'APP_ERROR', error })}
        )
    )
  }

  goToNextOrPreviousPage(direction?: string, name?: string): void {
    this.goToPage(name, direction === 'forward' ? this.currentPageSubject.value + 1 : this.currentPageSubject.value - 1);
  }
  

}
