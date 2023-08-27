import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../interface/event';

@Injectable({ providedIn: 'root' })
export class EventService {

  private readonly apiUrl='http://localhost:8080';
  constructor(private http: HttpClient) {}

  public getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(`${this.apiUrl}/event/all`);
  }
  
  public saveEvent(event:Event): Observable<Event>{
    return this.http.post<Event>(`${this.apiUrl}/event`, event);
  }
  
  public inviteParticipant(eventId: number): Observable<void>{
    return this.http.put<void>(`${this.apiUrl}/event/${eventId}/invite`, eventId);
  }
}
