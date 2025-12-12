import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bike} from "../interfaces/bike";

const baseURL = "http://localhost:3000/api/bikes"; // localhost part can also be extracted to env variables

@Injectable({
  providedIn: 'root'
})
export class BikesService {

  constructor(private http: HttpClient) {
  }

  getBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(`${baseURL}/`);
  }

  deleteBike(bikeId: number): Observable<void> {
    return this.http.delete<void>(`${baseURL}/${bikeId}`)
  }
}
