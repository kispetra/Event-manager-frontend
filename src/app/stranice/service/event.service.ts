import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../interface/event';
import { apiResponse } from '../interface/ApiResponse';
import { Page } from '../interface/Page';
import { Participant } from '../interface/participant';


@Injectable({ providedIn: 'root' })
export class EventService {

  private readonly apiUrl='http://localhost:8080';
  constructor(private http: HttpClient) {}

  events$=(name: string = '', page: number =0, size: number=9): Observable<apiResponse<Page>> =>
     this.http.get<apiResponse<Page>>(`${this.apiUrl}/event/all?name=${name}&page=${page}&size=${size}`);
  
  public getById(eventId:number):Observable<Event>{
    return this.http.get<Event>(`${this.apiUrl}/event/all/${eventId}`);
  }
  public getEventByIdUser(eventId:number):Observable<Event>{
    return this.http.get<Event>(`${this.apiUrl}/event/${eventId}`);
  }
  public deleteEvent(eventId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/event/${eventId}`);
  }
  public saveEvent(event:Event): Observable<Event>{
    return this.http.post<Event>(`${this.apiUrl}/event`, event);
  }
  public updateEvent(eventId: number, updatedEvent: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiUrl}/event/${eventId}`, updatedEvent);
  }
  public inviteParticipants(eventId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/event/${eventId}/invite`, {});
  }
  public getInvitedParticipants(eventId: number): Observable<Participant[]> {
    return this.http.get<Participant[]>(`${this.apiUrl}/event/${eventId}/invited`);
  }
  public getParticipantDetails(eventId: number, participantId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/event/${eventId}/participants/${participantId}`);
  }
  
}
