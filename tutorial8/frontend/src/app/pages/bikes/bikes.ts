import { Component } from '@angular/core';
import {BikesComponent} from '../../components/bikes-component/bikes-component';

@Component({
  selector: 'app-bikes',
  standalone: true,
  imports: [
    BikesComponent
  ],
  templateUrl: './bikes.html',
  styleUrl: './bikes.css',
})
export class Bikes {

}
