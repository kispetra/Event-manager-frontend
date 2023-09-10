import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppUser } from '../interface/appUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) {}

  getCurrentUser(httpOptions: { headers: HttpHeaders }): Observable<AppUser> { // Dodan httpOptions
    return this.http.get<AppUser>(this.apiUrl, httpOptions);
  }
}
