import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../_models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiUrl = 'http://localhost:8010/api/location'; 

  constructor(private http: HttpClient) {}

  getAllLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.apiUrl}/locations`);
  }
  checkLocationIdAvailability(locationId: number): Observable<boolean> {
    const url = `${this.apiUrl}/check-location/${locationId}`;
    return this.http.get<boolean>(url);
  }
  checkLocationIdNonAvailability(locationId: number): Observable<boolean> {
    const url = `${this.apiUrl}/check-locationNo/${locationId}`;
    return this.http.get<boolean>(url);
  }

  addLocation(locationData: any): Observable<any> {
    const url = `${this.apiUrl}/addLocation`;
    return this.http.post(url, locationData);
  }

  updateLocation(locationData: any): Observable<any> {
    const updateUrl = `${this.apiUrl}/${locationData.locationId}`; 
    return this.http.put(updateUrl, locationData);
  }
}
