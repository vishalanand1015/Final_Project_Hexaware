import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Booking } from 'src/app/Model/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  apiUrl: string = 'http://localhost:8181/api/v1/bookings/';
  baseUrl: string = 'http://localhost:8181/api/v1/buses/';
  constructor(private http: HttpClient) { }

  createBooking(booking:Booking): Observable<Booking> {
    return this.http.post<Booking>(`${this.apiUrl}add`,booking);
  }
  getBusById(busId: number): Observable<any> {
    const url = `${this.baseUrl}getBusById/${busId}`;
    return this.http.get<any>(url)
     
  }

 
}
