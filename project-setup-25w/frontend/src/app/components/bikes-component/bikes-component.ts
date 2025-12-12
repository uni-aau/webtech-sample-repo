import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Bike} from '../../interfaces/bike';
import {BikeComponent} from '../bike-component/bike-component';
import {BikesService} from '../../services/bikes.service';

@Component({
  selector: 'bikes-component',
  standalone: true,
  imports: [
    BikeComponent
  ],
  templateUrl: './bikes-component.html',
  styleUrl: './bikes-component.css',
})
export class BikesComponent implements OnInit {
  bikes: Bike[] = [];

  constructor(private bikesService: BikesService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(): void {
    this.bikesService.getBikes().subscribe(data => {
      this.bikes = data;
      console.log(this.bikes)
      this.cdr.detectChanges(); // helps to trigger Angulars change detection
    });
  }

  onBikeDeleted(bikeId: number): void {
    console.log('Bike deleted with ID:', bikeId);
    this.fetchData()
  }
}
