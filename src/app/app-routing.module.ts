import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './stranice/home/home.component';
import { AboutComponent } from './stranice/about/about.component';
import { EventsComponent } from './stranice/events/events.component';
import { RegisterComponent } from './stranice/registration/register/register.component';
import { LoginComponent } from './stranice/registration/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'events',component:EventsComponent},
  {path: 'about',component:AboutComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'login',component: LoginComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
