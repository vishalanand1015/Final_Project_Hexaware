import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../Model/admin.model';

import { Bus } from '../Model/bus.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 

  constructor(private http: HttpClient) {}
  apiUrl:string='http://localhost:8181/api/v1/admins/';
 

  createAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.apiUrl+"create",admin);
  }
 
  
 
}