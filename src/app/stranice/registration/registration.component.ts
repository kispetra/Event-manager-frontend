import { Component, OnInit, Input } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { SkillType } from 'src/app/stranice/interface/enum/skillType.enum';
import {  MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  
  skills = [
    { label: 'API', value: false },
    { label: 'JAVA', value: false },
    { label: 'Spring', value: false },
    { label: 'SpringBoot', value: false },
    { label: 'Hibernate', value: false },
    { label: 'JPA', value: false },
    { label: 'Scala', value: false }
  ];
  
  constructor(
    private fb: FormBuilder,
    private regService: RegistrationService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

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
        skills: this.fb.array([]), //TODO 
        experienceSummary: ''
      }),
      motivation: ['', Validators.required]
    });
    this.skills.forEach((skill) => {
      const control = new FormControl(skill.value); // Inicijalno stanje vještine
      (this.registrationForm.get('experience.skills') as FormArray).push(control);
    });
  }
  
  getControls(): FormControl[] {
    return (this.registrationForm.get('experience.skills') as FormArray).controls as FormControl[];
  }



  public saveRegistration(registrationForm: FormGroup): void {
    this.route.paramMap.subscribe(params => {
      const eventId = +params.get('eventId');
      this.regService.saveRegistration(eventId, registrationForm.value).subscribe(
        (response: Object) => {
          console.log(response);
          this.snackBar.open('Registracija je uspješno poslana.', 'Zatvori', {
            duration: 5000, // Trajanje obavijesti u milisekundama
          });
        }
      );
    });
  }
}
