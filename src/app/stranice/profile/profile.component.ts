import { Component, OnInit } from '@angular/core';

import { AppUser } from '../interface/appUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: AppUser;

  constructor() { }

  ngOnInit(): void {
    
  }
}