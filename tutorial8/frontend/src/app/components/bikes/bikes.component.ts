import {Component, OnInit} from '@angular/core';
import {Bike} from "../../interfaces/bike";
import {BikesService} from "../../services/bikes.service";
import {BikeComponent} from "../bike/bike.component";

@Component({
  selector: 'bikes-component',
  standalone: true,
  imports: [
    BikeComponent
  ],
  templateUrl: './bikes.component.html',
  styleUrl: './bikes.component.css'
})
export class BikesComponent implements OnInit {
  bikes: Bike[] = [];

  constructor(private bikesService: BikesService) {
  }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(): void {
    this.bikesService.getBikes().subscribe(data => {
      this.bikes = data;
      console.log(this.bikes)
    });
  }

  onBikeDeleted(bikeId: number): void {
    console.log('Bike deleted with ID:', bikeId);
    this.fetchData()
  }
}
