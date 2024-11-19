import { Route } from '@angular/router';
import { HomeComponent } from '../home/home.component';

export const FULL_ROUTE: Route[] = [
  {
    path: '',
    component: HomeComponent,
  }
] as Route[];
