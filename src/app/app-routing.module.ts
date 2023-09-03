import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './stranice/home/home.component';
import { AboutComponent } from './stranice/about/about.component';
import { EventsComponent } from './stranice/events/events.component';
import { EventComponent } from './stranice/event/event.component';
import { RegistrationComponent } from './stranice/registration/registration.component';
import { ProfileComponent } from './stranice/profile/profile.component';
import { LoginFormComponent } from './stranice/login-form/login-form.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'events',component:EventsComponent},
  {path: 'events/:eventId', component: EventComponent},
  {path: 'about',component:AboutComponent},
  {path: 'login',component: LoginFormComponent},
  {path: 'events/:eventId/registrations',component: RegistrationComponent},
  {path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
