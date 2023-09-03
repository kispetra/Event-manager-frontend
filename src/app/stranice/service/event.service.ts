import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../interface/event';
import { apiResponse } from '../interface/ApiResponse';
import { Page } from '../interface/Page';


@Injectable({ providedIn: 'root' })
export class EventService {

  private readonly apiUrl='http://localhost:8080';
  constructor(private http: HttpClient) {}

  events$=(name: string = '', page: number =0, size: number=9): Observable<apiResponse<Page>> =>
     this.http.get<apiResponse<Page>>(`${this.apiUrl}/event/all?name=${name}&page=${page}&size=${size}`);
  
  public getById(eventId:number):Observable<Event>{
    return this.http.get<Event>(`${this.apiUrl}/event/all/${eventId}`);
  }

  public saveEvent(event:Event, eventId: Number): Observable<Event>{
    return this.http.post<Event>(`${this.apiUrl}/event/${eventId}`, eventId);
  }
  
  public inviteParticipant(eventId: number): Observable<void>{
    return this.http.put<void>(`${this.apiUrl}/event/${eventId}/invite`, eventId);
  }
}
