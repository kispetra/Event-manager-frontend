import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { FlowRequestDto } from 'C:/Users/eetkisp/myapp/src/app/dtos/flowRequestDto';

@Injectable({ providedIn: 'root' })
export class EventService {
  

  private readonly apiUrl='any';
  constructor(private http: HttpClient) {}
  

  saveProgress$= (eventId: number, participantId: number, week_no: number, flowRequestDto: FlowRequestDto) => <Observable<Object>>
  this.http.put<Object>(`${this.apiUrl}/event/${eventId}/participants/${participantId}/week/${week_no}`, flowRequestDto)
 .pipe(
   tap(console.log),
   catchError(this.handleError)
 );

 getAllParticipants$= (eventId: number) => <Observable<Object>>
 this.http.get<Object>(`${this.apiUrl}/event/${eventId}/participants`)
.pipe(
  tap(console.log),
  catchError(this.handleError)
); //TODO: pageable

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(`An error ocurred - Error code: ${error.status}`);
  }
}