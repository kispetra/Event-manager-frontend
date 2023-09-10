import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, map  } from 'rxjs';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }

  private isLoggedIn: boolean = false; 

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  login(username: string, password: string): Observable<any> {
    this.isLoggedIn = true;
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, firstName: string, lastName: string, address: string,
     houseNumber: string, country: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username,
      firstName,
      lastName,
      address,
      houseNumber,
      country,
      email,
      password
    }, httpOptions);
  }
}