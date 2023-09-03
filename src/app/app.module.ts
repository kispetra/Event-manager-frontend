import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './stranice/navbar/navbar.component';
import { FooterComponent } from './stranice/footer/footer.component';
import { HomeComponent } from './stranice/home/home.component';
import { EventsComponent } from './stranice/events/events.component';
import { AboutComponent } from './stranice/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { EventComponent } from './stranice/event/event.component';
import { RegistrationComponent } from './stranice/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './stranice/profile/profile.component';
import { AuthContentComponent } from './stranice/auth-content/auth-content.component';
import { LoginFormComponent } from './stranice/login-form/login-form.component';
import { ContentComponent } from './stranice/content/content.component';
import { ButtonsComponent } from './stranice/buttons/buttons.component';
import { AxiosService } from './stranice/service/axios.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    EventsComponent,
    AboutComponent,
    EventComponent,
    RegistrationComponent,
    ProfileComponent,
    AuthContentComponent,
    LoginFormComponent,
    ContentComponent,
    ButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ DatePipe, AxiosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
