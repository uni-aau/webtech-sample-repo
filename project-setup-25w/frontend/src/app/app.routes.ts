import { Routes } from '@angular/router';
import {Bikes} from './pages/bikes/bikes';

export const routes: Routes = [
  {path: '', component: Bikes},
  {path: 'bike/testing', component: Bikes} // path would be localhost:3000/bike/testing
];
