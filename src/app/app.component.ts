import { Component, OnInit } from '@angular/core';
import { Event } from '../app/stranice/interface/event';
import { EventService } from './stranice/service/event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title='petra';
  
}
 
