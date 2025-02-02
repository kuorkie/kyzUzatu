import { Routes } from '@angular/router';
import {RsvpComponent} from './components/rsvp/rsvp.component';
import {WelcomeComponent} from './components/welcome/welcome.component';

export const routes: Routes = [
  {
    path:'',
    component:RsvpComponent,
    pathMatch:"full"
  },
  {
    path:'j',
    component:WelcomeComponent,
    pathMatch:"full"
  }
];
