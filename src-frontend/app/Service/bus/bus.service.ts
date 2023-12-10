import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from 'src/app/Model/bus.model';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  baseUrl: string = 'http://localhost:8181/api/v1/buses/';

  constructor(private http: HttpClient) {}

  getBuses(): Observable<Bus[]> {
    return this.http.get<Bus[]>(`${this.baseUrl}getAll`);
  }

  getBusById(id: number): Observable<Bus> {
    return this.http.get<Bus>(`${this.baseUrl}getById/${id}`);
  }

  updateBus(bus: Bus): Observable<any> {
    return this.http.put(`${this.baseUrl}update/${bus.busId}`, bus);
  }
  
}
