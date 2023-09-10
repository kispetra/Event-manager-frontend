import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { Event } from '../interface/event';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  private baseUrl='http://localhost:8080';
  constructor(private http: HttpClient) {
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token");
  }
  
  isLoggedIn(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  signOut(): void {
    window.localStorage.clear();
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  setAuthToken(token: string | null): void {
    if (token !== null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
  }
  
  getCurrentUser(): Promise<any> {
    const token = this.getAuthToken();
    console.log(token); // Dodajte ovu liniju za provjeru

    if (!token) {
      return Promise.reject("Token not available");
    }
    console.log("token", token);
  
    return  axios.get('/user', {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  request(method: string, url: string, data: any): Promise<any> {
      let headers: any = {};

      if (this.getAuthToken() !== null) {
          headers = {"Authorization": "Bearer " + this.getAuthToken()};
      }

      return axios({
          method: method,
          url: url,
          data: data,
          headers: headers
      });
   }

  getCurrentUserEvents(userId: number) {
    return this.http.get(`${this.baseUrl}/user/${userId}/event/all`);
  }
  public saveEvent(event:Event, userId:Number): Observable<Event>{
    return this.http.post<Event>(`${this.baseUrl}/user/${userId}/event`, event);
  }
}
