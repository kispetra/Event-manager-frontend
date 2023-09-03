import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private regService: RegistrationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.registrationForm = this.fb.group({
      personal: this.fb.group({
        name: this.fb.group({
          first: ['', Validators.required],
          last: ['', Validators.required]
        }),
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        education: this.fb.group({
          faculty: ['', Validators.required],
          year: ['', Validators.required]
        }),
        summary: ''
      }),
      experience: this.fb.group({
        years: ['', Validators.required],
        skills: this.fb.array([], Validators.required),
        summary: ''
      }),
      motivation: ['', Validators.required]
    });
  }

  get skillTypes(): string[] {
    return ['API', 'Java', 'Spring', 'Spring Boot', 'Hibernate', 'JPA'];
  }

  public saveRegistration(registrationForm: FormGroup): void {
    this.route.paramMap.subscribe(params => {
      const eventId = +params.get('eventId');
      this.regService.saveRegistration(eventId, registrationForm.value).subscribe(
        (response: Object) => {
          console.log(response);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    });
  }




}
